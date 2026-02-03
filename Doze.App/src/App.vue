<script setup>
  import audioFile from './assets/relax.mp3'
  import {VueSound} from 'vue-sound'
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
