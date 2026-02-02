<script setup>
  import audioFile from './assets/relax.mp3'
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
