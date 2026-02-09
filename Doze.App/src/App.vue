<script setup>
  import audioFile1 from './assets/relax.mp3'
  import audioFile2 from './assets/fire-crackling.mp3'
  import audioFile3 from './assets/leaf-rain.mp3'
  import audioFile4 from './assets/loud-rain-thunder.mp3'
  import audioFile5 from './assets/ocean-waves.mp3'
  import audioFile6 from './assets/rain-birds.mp3'
  import audioFile7 from './assets/rain-roof.mp3'
  import audioFile8 from './assets/rain-thunder.mp3'
  import audioFile9 from './assets/stream-water.mp3'
  import audioFile10 from './assets/thunder.mp3'
  import audioFile11 from './assets/white-noise.mp3'
  import { ref } from 'vue'

  const selectedSound = ref(audioFile1)
</script>

<template>

  <main>
    <RouterView />

    <div>
      <p @click="selectedSound = audioFile1">Relaxing Music</p>
      <p @click="selectedSound = audioFile2">Fire Crackling</p>
      <p @click="selectedSound = audioFile3">Leaf Rain</p>
      <p @click="selectedSound = audioFile4">Loud Rain with Thunder</p>
      <p @click="selectedSound = audioFile5">Ocean Waves</p>
      <p @click="selectedSound = audioFile6">Rain with Birds</p>
      <p @click="selectedSound = audioFile7">Rain on Roof</p>
      <p @click="selectedSound = audioFile8">Rain with Thunder</p>
      <p @click="selectedSound = audioFile9">Stream Water</p>
      <p @click="selectedSound = audioFile10">Thunder</p>
      <p @click="selectedSound = audioFile11">White Noise</p>
    </div>

    <VueSound
      :file="selectedSound"
    />
    
  </main>
</template>

<style scoped>
  div {
    cursor: pointer;
  }

</style>
