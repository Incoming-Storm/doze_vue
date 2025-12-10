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

// Game state
const score = ref(0)
const triangles = ref([])
const gameActive = ref(true)
let triangleIdCounter = 0
const keys = {}

// Arrow key movement speed
const moveSpeed = 2

const getRandomPosition = () => {
  const x = Math.random() * 85 + 7.5
  const y = Math.random() * 85 + 7.5
  return { x, y }
}

const createTriangle = () => {
  const pos = getRandomPosition()
  return {
    id: triangleIdCounter++,
    x: pos.x,
    y: pos.y,
    collected: false
  }
}

const initializeTriangles = () => {
  triangles.value = []
  for (let i = 0; i < 5; i++) {
    triangles.value.push(createTriangle())
  }
}

const handleKeyDown = (e) => {
  keys[e.key] = true
}

const handleKeyUp = (e) => {
  keys[e.key] = false
}

const movePlayer = () => {
  if (keys['ArrowUp'] || keys['w'] || keys['W']) {
    playerY.value = Math.max(5, playerY.value - moveSpeed)
  }
  if (keys['ArrowDown'] || keys['s'] || keys['S']) {
    playerY.value = Math.min(95, playerY.value + moveSpeed)
  }
  if (keys['ArrowLeft'] || keys['a'] || keys['A']) {
    playerX.value = Math.max(5, playerX.value - moveSpeed)
  }
  if (keys['ArrowRight'] || keys['d'] || keys['D']) {
    playerX.value = Math.min(95, playerX.value + moveSpeed)
  }
}

const checkCollisions = () => {
  triangles.value.forEach(triangle => {
    if (!triangle.collected) {
      const dx = playerX.value - triangle.x
      const dy = playerY.value - triangle.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      
      if (distance < 8) {
        triangle.collected = true
        score.value++
        
        // Remove collected triangle and add new one
        setTimeout(() => {
          triangles.value = triangles.value.filter(t => t.id !== triangle.id)
          triangles.value.push(createTriangle())
        }, 100)
      }
    }
  })
}

const gameLoop = () => {
  if (gameActive.value) {
    movePlayer()
    checkCollisions()
    requestAnimationFrame(gameLoop)
  }
}

const resetGame = () => {
  score.value = 0
  playerX.value = 50
  playerY.value = 50
  triangleIdCounter = 0
  initializeTriangles()
  gameActive.value = true
}

onMounted(() => {
  initializeTriangles()
  window.addEventListener('keydown', handleKeyDown)
  window.addEventListener('keyup', handleKeyUp)
  gameLoop()
})

onUnmounted(() => {
  gameActive.value = false
  window.removeEventListener('keydown', handleKeyDown)
  window.removeEventListener('keyup', handleKeyUp)
})
</script>

<template>
    <div class="game">
        <div class="back"><router-link to="/homepage"><button>Back</button></router-link></div>
        
        <div class="game-header">
          <h2>Circle Collection Game</h2>
          <div class="stats">
            <div class="stat">
              <span class="stat-label">Score:</span>
              <span class="stat-value">{{ score }}</span>
            </div>
          </div>
        </div>

        <div class="instructions">
          <p>Use <strong>Arrow Keys</strong> or <strong>WASD</strong> to move your circle and collect the triangles!</p>
        </div>

        <div class="game-area">
          <!-- Player (Circle) -->
          <div 
            class="player"
            :style="{
              left: playerX + '%',
              top: playerY + '%'
            }">
            🔵
          </div>
          
          <!-- Triangles to collect -->
          <div 
            v-for="triangle in triangles"
            :key="triangle.id"
            class="triangle"
            :class="{ collected: triangle.collected }"
            :style="{
              left: triangle.x + '%',
              top: triangle.y + '%'
            }">
            △
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
  transition: opacity 0.1s ease;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
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