import { ref, watch } from 'vue'
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

const sounds = [
  { label: 'Relaxing Music', value: audioFile1 },
  { label: 'Fire Crackling', value: audioFile2 },
  { label: 'Leaf Rain', value: audioFile3 },
  { label: 'Loud Rain with Thunder', value: audioFile4 },
  { label: 'Ocean Waves', value: audioFile5 },
  { label: 'Rain with Birds', value: audioFile6 },
  { label: 'Rain on Roof', value: audioFile7 },
  { label: 'Rain with Thunder', value: audioFile8 },
  { label: 'Stream Water', value: audioFile9 },
  { label: 'Thunder', value: audioFile10 },
  { label: 'White Noise', value: audioFile11 },
]

const selectedSound = ref(sounds[0].value)
const isPlaying = ref(false)
const volume = ref(0.5)
const audioElement = ref(null)

const setAudioElement = (element) => {
  audioElement.value = element

  if (!audioElement.value) {
    return
  }

  audioElement.value.src = selectedSound.value
  audioElement.value.volume = volume.value
}

const togglePlay = async () => {
  if (!audioElement.value) {
    return
  }

  if (isPlaying.value) {
    audioElement.value.pause()
    isPlaying.value = false
    return
  }

  try {
    await audioElement.value.play()
    isPlaying.value = true
  } catch {
    isPlaying.value = false
  }
}

watch(selectedSound, async (newSound) => {
  if (!audioElement.value) {
    return
  }

  audioElement.value.src = newSound

  if (isPlaying.value) {
    try {
      await audioElement.value.play()
    } catch {
      isPlaying.value = false
    }
  }
})

watch(volume, (newVolume) => {
  if (audioElement.value) {
    audioElement.value.volume = newVolume
  }
})

export function useAudioPlayer() {
  return {
    sounds,
    selectedSound,
    isPlaying,
    volume,
    setAudioElement,
    togglePlay,
  }
}
