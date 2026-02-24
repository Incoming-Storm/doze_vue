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

  defineProps({
  msg: {
    type: String,
    required: true,
  },
})

const audioRef = ref(null)
const isPlaying = ref(false)
const volume = ref(0.5)

const togglePlay = () => {
  if (audioRef.value) {
    if (isPlaying.value) {
      audioRef.value.pause()
    } else {
      audioRef.value.play()
    }
    isPlaying.value = !isPlaying.value
  }
}

const handleVolumeChange = (e) => {
  volume.value = parseFloat(e.target.value)
  if (audioRef.value) {
    audioRef.value.volume = volume.value
  }
}
</script>

<template>

  <main>

<!--    <select v-model="selectedSound">
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
    />-->
                <!-- Audio Player -->
            <div class="audio-player">
                <div class="sound-select">
                    <label for="soundSelect">Choose Sound:</label>
                    <select id="soundSelect" v-model="selectedSound">
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
                </div>
                
                <div class="controls">
                    <button @click="togglePlay" class="play-btn">
                        {{ isPlaying ? '|| Pause' : '▶ Play' }}
                    </button>
                </div>
                
                <div class="volume-control">
                    <label for="volumeSlider">Volume:</label>
                    <input 
                        id="volumeSlider"
                        type="range" 
                        min="0" 
                        max="1" 
                        step="0.1" 
                        :value="volume"
                        @input="handleVolumeChange"
                    />
                </div>
                
                <audio 
                    ref="audioRef" 
                    :src="selectedSound"
                    loop
                ></audio>
            </div>
            <RouterView />
  </main>
</template>

<style scoped>
  div {
    cursor: pointer;
  }

  /* Audio Player Styles */
.audio-player {
  margin-top: 40px;
  padding: 10px;
  background: rgba(255,255,255,0.08–0.15);
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(147, 24, 200, 0.1);
  width: 220px;
  text-align: center;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: end;
}

.sound-select {
  margin-bottom: 15px;
}

.sound-select label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: rgb(11, 8, 8);
  font-family: 'Georgia', serif;
}

.sound-select select {
  width: 100%;
  padding: 8px;
  border: 2px solid rgb(11, 8, 8);
  border-radius: 8px;
  font-family: 'Georgia', serif;
  cursor: pointer;
  background-color: rgba(246, 225, 249, 0.9);
}

.controls {
  margin-bottom: 15px;
}

.play-btn {
  width: 100%;
  padding: 10px;
  border: 2px solid rgb(11, 8, 8);
  background-color: rgba(239, 221, 243, 0.9);
  font-family: 'Georgia', serif;
  font-weight: 600;
  border-radius: 8px;
}

.play-btn:hover {
  background-color: rgb(240, 240, 240);
}

.volume-control {
  display: flex;
  align-items: center;
  gap: 10px;
}

.volume-control label {
  font-weight: 600;
  color: rgb(11, 8, 8);
  font-family: 'Georgia', serif;
  margin: 0;
}

.volume-control input[type="range"] {
  width: 100%;
  cursor: pointer;
}

</style>
