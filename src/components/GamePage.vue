<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AudioPlayer from '../AudioPlayer.vue';

defineProps({
  msg: {
    type: String,
    required: true,
  },
})

// Player (circle)
const playerX = ref(50)
const playerY = ref(50)
const circleValue = ref(1)

// Game state
const score = ref(0)
const triangles = ref([])
const gameActive = ref(true)
const maxTriangleValue = ref(10)
let triangleIdCounter = 0

const getRandomPosition = (existingTriangles = []) => {
  let x, y, distanceFromPlayer, tooClose
  do {
    x = Math.random() * 85 + 7.5
    y = Math.random() * 85 + 7.5
    distanceFromPlayer = Math.sqrt((x - playerX.value) ** 2 + (y - playerY.value) ** 2)

    tooClose = false
    for (let triangle of existingTriangles) {
      const distanceFromTriangle = Math.sqrt((x - triangle.x) ** 2 + (y - triangle.y) ** 2)
      if (distanceFromTriangle < 20) {
        tooClose = true
        break
      }
    }
  } while (distanceFromPlayer < 20 || tooClose)

  return { x, y }
}

const getRandomValue = () => {
  return Math.floor(Math.random() * maxTriangleValue.value) + 1
}

const createTriangle = () => {
  const pos = getRandomPosition(triangles.value)
  return {
    id: triangleIdCounter++,
    x: pos.x,
    y: pos.y,
    value: getRandomValue(),
    collected: false
  }
}

const canEatTriangle = (triangle) => {
  return triangle.value <= circleValue.value
}

const hasEatableTriangle = () => {
  return triangles.value.some(t => canEatTriangle(t))
}

const spawnEatableTriangle = () => {
  const triangleValue = Math.floor(Math.random() * circleValue.value) + 1
  const pos = getRandomPosition(triangles.value)
  triangles.value.push({
    id: triangleIdCounter++,
    x: pos.x,
    y: pos.y,
    value: triangleValue,
    collected: false
  })
}

const updateMaxTriangleValue = () => {
  if (circleValue.value > maxTriangleValue.value) {
    maxTriangleValue.value = Math.floor(maxTriangleValue.value * 5)
  }
}

const initializeTriangles = () => {
  triangles.value = []
  const pos1 = getRandomPosition()
  triangles.value.push({
    id: triangleIdCounter++,
    x: pos1.x,
    y: pos1.y,
    value: 1,
    collected: false
  })
  for (let i = 1; i < 5; i++) {
    triangles.value.push(createTriangle())
  }
}

const handleGameAreaClick = (e) => {
  const gameArea = document.querySelector('.game-area')
  if (!gameArea) return

  const rect = gameArea.getBoundingClientRect()
  let targetX = ((e.clientX - rect.left) / rect.width) * 100
  let targetY = ((e.clientY - rect.top) / rect.height) * 100

  targetX = Math.max(5, Math.min(95, targetX))
  targetY = Math.max(5, Math.min(95, targetY))

  let closestBigger = null
  let minDist = Infinity
  triangles.value.forEach(triangle => {
    if (!canEatTriangle(triangle)) {
      const dx = targetX - triangle.x
      const dy = targetY - triangle.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < minDist) {
        minDist = dist
        closestBigger = triangle
      }
    }
  })

  if (closestBigger && minDist < 8) {
    const dx = targetX - closestBigger.x
    const dy = targetY - closestBigger.y
    const dist = Math.sqrt(dx * dx + dy * dy)
    if (dist > 0) {
      const ratio = 8 / dist
      targetX = closestBigger.x + dx * ratio
      targetY = closestBigger.y + dy * ratio
      // Clamp again
      targetX = Math.max(5, Math.min(95, targetX))
      targetY = Math.max(5, Math.min(95, targetY))
    }
  }

  playerX.value = targetX
  playerY.value = targetY
}

const checkCollisions = () => {
  triangles.value.forEach(triangle => {
    if (!triangle.collected) {
      const dx = playerX.value - triangle.x
      const dy = playerY.value - triangle.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < 8 && canEatTriangle(triangle)) {
        triangle.collected = true
        circleValue.value += triangle.value
        updateMaxTriangleValue()
        score.value++

        setTimeout(() => {
          triangles.value = triangles.value.filter(t => t.id !== triangle.id)
          triangles.value.push(createTriangle())

          // Check if there are any eatable triangles left, if not spawn one
          if (!hasEatableTriangle()) {
            spawnEatableTriangle()
          }
        }, 100)
      }
    }
  })
}

const gameLoop = () => {
  if (gameActive.value) {
    checkCollisions()
    requestAnimationFrame(gameLoop)
  }
}

const resetGame = () => {
  circleValue.value = 1
  score.value = 0
  playerX.value = 50
  playerY.value = 50
  triangleIdCounter = 0
  maxTriangleValue.value = 10
  initializeTriangles()
  gameActive.value = true
}

onMounted(() => {
  initializeTriangles()
  const gameArea = document.querySelector('.game-area')
  if (gameArea) {
    gameArea.addEventListener('click', handleGameAreaClick)
  }
  gameLoop()
})

onUnmounted(() => {
  gameActive.value = false
  const gameArea = document.querySelector('.game-area')
  if (gameArea) {
    gameArea.removeEventListener('click', handleGameAreaClick)
  }
})

const showAudioPlayer = ref(false);
</script>

<template>
      <ul>
        <li><router-link to="/homepage"><span class="material-icons">home</span><span></span></router-link></li>
        <li><router-link to="/hotlines"><span class="material-icons">phone</span><span class="button-text"></span></router-link></li>
        <li><router-link to="/trivia"><span class="material-icons">quiz</span><span class="button-text"></span></router-link></li>
        <li><router-link to="/journal"><span class="material-icons">layers</span><span class="button-text"></span></router-link></li>
        <li><router-link to="/game"><span class="material-icons">sports_esports</span><span class="button-text"></span></router-link></li>
      </ul>
  <div class="game">
    <div class="top-controls">
      <button class="audio-toggle" @click="showAudioPlayer = !showAudioPlayer">
        <span class="material-icons">audiotrack</span>
        <span class="button-text">{{ showAudioPlayer ? 'Hide Audio' : 'Audio Player' }}</span>
      </button>
      <AudioPlayer v-if="showAudioPlayer" @close="showAudioPlayer = false" />
    </div>

        <div class="game-header">

          <div class="stats">
            <div class="stat">
              <span class="stat-label">Circle Value:</span>
              <span class="stat-value">{{ circleValue }}</span>
            </div>
            <div class="stat">
              <span class="stat-label">Eaten:</span>
              <span class="stat-value">{{ score }}</span>
            </div>
          </div>
        </div>

        <div class="calming-description">
          <p>This game is designed to be a <strong>calming experience</strong>. The gentle movement, soft visuals, and simple goal help quiet your mind — just breathe, focus, and let your circle grow at its own pace.</p>
        </div>

        <div class="instructions">
          <p><strong>Click</strong> anywhere on the game area to move your circle and eat triangles! You can only eat triangles with value ≤ your circle's value.</p>
        </div>

        <div class="game-area">
          <div
            class="player"
            :style="{
              left: playerX + '%',
              top: playerY + '%'
            }">
            <span class="player-value">{{ circleValue }}</span>
          </div>

          <div
            v-for="triangle in triangles"
            :key="triangle.id"
            class="triangle"
            :class="{ 'too-big': !canEatTriangle(triangle), collected: triangle.collected }"
            :style="{
              left: triangle.x + '%',
              top: triangle.y + '%'
            }">
            <span class="triangle-value">{{ triangle.value }}</span>
          </div>
        </div>

        <div class="game-controls">
          <button @click="resetGame" class="reset-btn">Reset Game</button>
        </div>
  </div>
</template>

<style scoped>
.game {
  max-width: 900px;
  margin: 0 auto;
  padding: 190px 20px 20px;
}

.back {
  margin-bottom: 20px;
}

.calming-description {
  background: linear-gradient(135deg, #d2c6e4, #d2c6e4);
  border-radius: 8px;
  padding: 12px 18px;
  margin-bottom: 16px;
  color: #3e2a5a;
  font-size: 0.95rem;
  line-height: 1.5;
}

.game-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.game-header h2 {
  margin: 0;
  color: #000000;
}

.stats {
  display: flex;
  gap: 20px;
}

.stat {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #f0f0f0;
  padding: 10px 15px;
  border-radius: 6px;
}

.stat-label {
  color: #666;
  font-size: 14px;
}

.stat-value {
  color: #4c5eaf;
  font-size: 20px;
  font-weight: bold;
}

.instructions {
  background-color: #e3f2fd;
  padding: 12px 15px;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 14px;
  color: #1976d2;
}

.instructions p {
  margin: 0;
}

.game-area {
  width: 100%;
  height: 500px;
  background: linear-gradient(135deg, #8093e9 0%, #9463c5 100%);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  cursor: pointer;
}

.player {
  position: absolute;
  width: 40px;
  height: 40px;
  transform: translate(-50%, -50%);
  font-size: 32px;
  transition: all 0.05s linear;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f9ed;
  border: 3px solid #7820bb;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.player-value {
  color: #044a83;
  font-weight: bold;
  font-size: 14px;
}

.triangle {
  position: absolute;
  width: 40px;
  height: 40px;
  transform: translate(-50%, -50%);
  font-size: 36px;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.1s ease, filter 0.1s ease;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.triangle-value {
  color: white;
  font-weight: bold;
  font-size: 16px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.triangle::before {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 35px solid #0d02aa;
  z-index: -1;
}

.triangle.too-big {
  opacity: 0.4;
}

.triangle.too-big::before {
  border-bottom-color: #999;
}

.triangle.collected {
  opacity: 0;
  pointer-events: none;
}

.game-controls {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.reset-btn {
  background-color: #4c66af;
  color: white;
  padding: 8px 30px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}

.reset-btn:hover {
  background-color: #3b3e66;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

@media (max-width: 600px) {
  .game-area {
    height: 350px;
  }

  .game-header {
    flex-direction: column;
    gap: 15px;
  }

  .instructions {
    font-size: 12px;
  }
}

</style>
