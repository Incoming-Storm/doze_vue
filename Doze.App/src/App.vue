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

    <select v-model="selectedSound">
      <option :value="audioFile1">Relaxing Music</option>
      <option :value="audioFile2">Fire Crackling</option>
      <option :value="audioFile3">Leaf Rain</option>
      <option :value="audioFile4">Loud Rain with Thunder</option>
      <option :value="audioFile5">Ocean Waves</option>
      <option :value="audioFile6">Rain with Birds</option>
      <option :value="audioFile7">Rain on Roof</option>
      <option :value="audioFile8">Rain with Thunder</option>
      <option :value="audioFile9">Stream Water</option>
      <option :value="audioFile10">Thunder</option>
      <option :value="audioFile11">White Noise</option>
    </select>


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
