<script setup>
  import { onBeforeUnmount, onMounted, ref } from 'vue'
  import { RouterView } from 'vue-router'
  import { useAudioPlayer } from './composables/useAudioPlayer'

  const audioRef = ref(null)
  const { selectedSound, isPlaying, setAudioElement } = useAudioPlayer()

  const handlePlay = () => {
    isPlaying.value = true
  }

  const handlePause = () => {
    isPlaying.value = false
  }

  onMounted(() => {
    setAudioElement(audioRef.value)
  })

  onBeforeUnmount(() => {
    setAudioElement(null)
  })
</script>

<template>
  <div class="app">
  <audio
    ref="audioRef"
    :src="selectedSound"
    loop
    hidden
    @play="handlePlay"
    @pause="handlePause"
  ></audio>
  <RouterView />
  </div>
</template>

<style>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h2 {
  font-size: 1.6rem;
  line-height: 1.4; /* Improve readability */
}

html {
  scrollbar-gutter: stable;
}

ul {
  list-style-type: none;
  background-color: #1e1a4d;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
  z-index: 1000;
  height: 90px;
  overflow: hidden;
}

ul li {
  display: block;
  color: #add8e6;
  padding: 10px 10px;
  text-decoration: none;
  align-items: center;
}

ul li a {
  color: inherit; /* Inherit color from li */
  text-decoration: none; /* Remove underline */
  padding: 20px 4vmin; /* Add padding for better click area */
  border-radius: 5px; /* Round corners */
  transition: background-color 0.3s, color 0.3s; /* Smooth hover */
  align-items: center;
}

ul li a:hover {
  background-color: #111111;
}

ul li .material-icons{
  font-size: 30px;
  align-items: center;
}

.audio-toggle {
  margin-bottom: 12px;
  background-color: #1e1a4d;
  color: #add8e6;
  border: none;
  border-radius: 60px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 0px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 50px;
}

.audio-toggle:hover {
  background-color: #593f89;
}

.top-controls {
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.top-controls :deep(.audio-player) {
  margin-top: 0;
}

.app::before {
  content: '';
  position: fixed;
  inset: 0;              /* same as top: 0; left: 0; right: 0; bottom: 0; */
  background: radial-gradient(circle, #3b2d68 5%, #8a6bb1 90%);
  background-size: 200% 200%;
  animation: animated-gradient-wave 8s ease-in-out infinite;
  z-index: -1;
  pointer-events: none;
}

@keyframes animated-gradient-wave {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
</style>

