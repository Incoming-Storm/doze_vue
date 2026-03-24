<script setup>
  import { useAudioPlayer } from './composables/useAudioPlayer'

const emit = defineEmits(['close'])

const { sounds, selectedSound, isPlaying, volume, togglePlay } = useAudioPlayer()

const handleVolumeChange = (e) => {
  volume.value = parseFloat(e.target.value)
}

const handleClose = () => {
  emit('close')
}
</script>

<template>
  <div class="audio-player">
      <button class="close-btn" @click="handleClose" aria-label="Close audio player">X</button>
      <div class="sound-select">
        <label for="soundSelect">Choose Sound:</label>
        <select id="soundSelect" v-model="selectedSound">
          <option v-for="sound in sounds" :key="sound.label" :value="sound.value">
            {{ sound.label }}
          </option>
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
  </div>
</template>

<style scoped>
  div {
    cursor: pointer;
  }

  /* Audio Player Styles */
.audio-player {
  position: relative;
  margin-top: 12px;
  padding: 10px;
  background:rgb(186, 60, 75, .35);
  border-radius: 15px;
  border: 2px solid #DB95AC;
  box-shadow: 0 4px 6px rgba(147, 24, 200, 0.1);
  width: 220px;
  text-align: center;
}

.close-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  line-height: 1;
  border: 1px solid #DB95AC;
  border-radius: 50%;
  background-color: rgba(239, 221, 243);
  color: #43283d;
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  font-size: 15px;
}

.close-btn:hover {
  background-color: rgb(240, 240, 240);
}

.play-btn {
  width: 100%;
  padding: 10px;
  border: 2px solid #DB95AC;
  background-color: #5385e9; /* unique color */
  color: #43283d;
  font-family: 'Georgia', serif;
  font-weight: 600;
  border-radius: 8px;
}

.play-btn:hover {
  background-color: #DB95AC; /* hover shade */
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
  border: 2px solid #DB95AC;
  border-radius: 8px;
  font-family: 'Georgia', serif;
  cursor: pointer;
  background-color: rgba(246, 225, 249);
}

.controls {
  margin-bottom: 15px;
}

.play-btn {
  width: 100%;
  padding: 10px;
  border: 2px solid #DB95AC;
  background-color: rgba(239, 221, 243);
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
  color: #DB95AC;
  background-color: #DB95AC;
}

</style>
