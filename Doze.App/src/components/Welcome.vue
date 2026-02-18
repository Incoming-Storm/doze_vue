<script setup>
import { ref } from 'vue'
import audioFile1 from '../assets/relax.mp3'
import audioFile2 from '../assets/fire-crackling.mp3'
import audioFile3 from '../assets/leaf-rain.mp3'
import audioFile4 from '../assets/loud-rain-thunder.mp3'
import audioFile5 from '../assets/ocean-waves.mp3'
import audioFile6 from '../assets/rain-birds.mp3'
import audioFile7 from '../assets/rain-roof.mp3'
import audioFile8 from '../assets/rain-thunder.mp3'
import audioFile9 from '../assets/stream-water.mp3'
import audioFile10 from '../assets/thunder.mp3'
import audioFile11 from '../assets/white-noise.mp3'

defineProps({
  msg: {
    type: String,
    required: true,
  },
})

const selectedSound = ref(audioFile1)
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
        <div class="welcome">
            <h1>Doze</h1>
            <router-link to="/homepage"><button>Continue</button></router-link>
            
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
                        {{ isPlaying ? '⏸ Pause' : '▶ Play' }}
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
        </div>

</template>

<style scoped>

  .welcome{
  position: relative;
  margin: 0 auto 10px auto; /* centers them and adds a little space below */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Ensures full screen height for vertical centering */
}


h1 {
  font-weight: 500;
  font-size: 100px;
  position: relative;
  top: -10px;
  font-family: 'Georgia', serif;  /* Add this line */
}


h3 {
  font-size: 1.2rem;
}

.welcome::before {
  content: '';
  position: fixed;
  inset: 0;              /* same as top: 0; left: 0; right: 0; bottom: 0; */
  background-image: url('@/assets/purple.png');
  background-size: cover;
  background-position: center;
  z-index: -1;
  pointer-events: none;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: center;
  }
}

button {
  width: 200px;
  height: 55px;
  font-size: 1.2rem;
  padding: 10px;
  border: none;
  border-radius: 50px;
  color: rgb(11, 8, 8);
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: 'Georgia', serif;
  font-weight: 500;
}

/* Audio Player Styles */
.audio-player {
  margin-top: 40px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
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
  background-color: white;
}

.controls {
  margin-bottom: 15px;
}

.play-btn {
  width: 100%;
  padding: 10px;
  border: 2px solid rgb(11, 8, 8);
  background-color: white;
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
