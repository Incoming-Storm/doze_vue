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
.app::before {
  content: '';
  position: fixed;
  inset: 0;              /* same as top: 0; left: 0; right: 0; bottom: 0; */
  background: radial-gradient(circle, #0e1f6c 0%, #a881cf 100%);
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

