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
</script>

<template>

  <main>
    <RouterView />

    <VueSound
      :file="audioFile"
    />
    
  </main>
</template>

<style scoped>

</style>
