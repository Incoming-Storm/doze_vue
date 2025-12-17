<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineProps({
  msg: {
    type: String,
    required: true,
  },
})

// Player (circle)
const playerX = ref(50)
const playerY = ref(50)
const playerSize = 40
const circleValue = ref(1)

// Game state
const score = ref(0)
const triangles = ref([])
const gameActive = ref(true)
const maxTriangleValue = ref(10)
let triangleIdCounter = 0

const getRandomPosition = (existingTriangles = []) => {
  let x, y, distanceFromPlayer, tooClose
  // Keep generating until we find a position far from player and other triangles
  do {
    x = Math.random() * 85 + 7.5
    y = Math.random() * 85 + 7.5
    // Calculate distance from player's current position
    distanceFromPlayer = Math.sqrt((x - playerX.value) ** 2 + (y - playerY.value) ** 2)
    
    // Check distance from all existing triangles
    tooClose = false
    for (let triangle of existingTriangles) {
      const distanceFromTriangle = Math.sqrt((x - triangle.x) ** 2 + (y - triangle.y) ** 2)
      if (distanceFromTriangle < 20) { // Minimum distance of 20 units from other triangles
        tooClose = true
        break
      }
    }
  } while (distanceFromPlayer < 20 || tooClose) // Must be far from player AND other triangles
  
  return { x, y }
}

const getRandomValue = () => {
  return Math.floor(Math.random() * maxTriangleValue.value) + 1 // Random value 1 to maxTriangleValue
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
  // Spawn a triangle with value equal to or less than current circle value
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
  // If circle value exceeds max triangle value, increase exponentially
  if (circleValue.value > maxTriangleValue.value) {
    maxTriangleValue.value = Math.floor(maxTriangleValue.value * 5)
  }
}

const initializeTriangles = () => {
  triangles.value = []
  // First triangle always has value 1 so player can eat it
  const pos1 = getRandomPosition()
  triangles.value.push({
    id: triangleIdCounter++,
    x: pos1.x,
    y: pos1.y,
    value: 1,
    collected: false
  })
  // Rest are random
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
  
  // Keep player within bounds
  targetX = Math.max(5, Math.min(95, targetX))
  targetY = Math.max(5, Math.min(95, targetY))
  
  // Check for bigger triangles that would be overlapped
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
    // Move to position at distance 8 from the closest bigger triangle
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
        
        // Remove collected triangle and add new one
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
</script>

<template>
    <div class="game">
        <div class="back"><router-link to="/homepage"><button>Back</button></router-link></div>
        
        <div class="game-header">
          <h2>Circle Collection Game</h2>
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

        <div class="instructions">
          <p><strong>Click</strong> anywhere on the game area to move your circle and eat triangles! You can only eat triangles with value ≤ your circle's value.</p>
        </div>

        <div class="game-area">
          <!-- Player (Circle) -->
          <div 
            class="player"
            :style="{
              left: playerX + '%',
              top: playerY + '%'
            }">
            <span class="player-value">{{ circleValue }}</span>
          </div>
          
          <!-- Triangles to collect -->
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
  padding: 20px;
}

.back {
  margin-bottom: 20px;
}

.game-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.game-header h2 {
  margin: 0;
  color: #333;
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
  color: #4CAF50;
  font-size: 20px;
  font-weight: bold;
}

.instructions {
  background-color: #e3f2fd;
  border-left: 4px solid #2196F3;
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
  background-color: #fff;
  border: 3px solid #FFD700;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.player-value {
  color: #2196F3;
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
  border-bottom: 35px solid #FF6B6B;
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
  background-color: #4CAF50;
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}

.reset-btn:hover {
  background-color: #45a049;
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