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
  <audio
    ref="audioRef"
    :src="selectedSound"
    loop
    hidden
    @play="handlePlay"
    @pause="handlePause"
  ></audio>
  <RouterView />
</template>



