<script setup>
import { ref } from 'vue'
import AudioPlayer from '../AudioPlayer.vue';

const quotes = [
"\"Sometimes the worst place you can be is in your own head.\" — Timothy Ferriss",
"\"You are stronger than you think. You have gotten through every bad day in your life, and you are undefeated.\" — Lori Gottlieb",
"\"Fall seven times, stand up eight.\" — Japanese Proverb",
"\"The greatest weapon against stress is our ability to choose one thought over another.\" — William James",
"\"You may encounter many defeats, but you must not be defeated.\" — Maya Angelou",
"\"The sun himself is weak when he first rises, and gathers strength and courage as the day gets on.\" — Charles Dicken",
"\"Success is not final, failure is not fatal: It is the courage to continue that counts.\" — Winston Churchill",
"\"You have been criticizing yourself for years, and it hasn’t worked. Try approving of yourself and see what happens.\" — Louise Hay",
"\"You are your best thing.\" — Toni Morrison",
"\"Healing takes time, and asking for help is a courageous step.\" — Mariska Hargitay",
"\"Even the darkest night will end, and the sun will rise.\" — Victor Hugo",
"\"Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.\" — J.K. Rowling",
"\"There is hope, even when your brain tells you there isn’t.\" — John Green",
"\"If you’re going through hell, keep going.\" — Winston Churchill",
"\"Hardships often prepare ordinary people for an extraordinary destiny.\" — C.S. Lewis",
"\"What mental health needs is more sunlight, more candor, and more unashamed conversation.\" — Glenn Close",
"\"Turn your wounds into wisdom.\" — Oprah Winfrey",
"\"The only way to get rid of the fear of doing something is to go out and do it.\" — Susan Jeffers",
"\"Vulnerability is not winning or losing; it’s having the courage to show up and be seen when we have no control over the outcome.\" — Brené Brown",
"\"You can’t stop the waves, but you can learn to surf.\" — Jon Kabat-Zinn"
];

const quote = ref(quotes[Math.floor(Math.random() * quotes.length)]);
const showAudioPlayer = ref(false);
console.log(quote.value);
</script>

<template>
    <ul class="top-nav">
      <li><router-link to="/homepage"><span class="material-icons">home</span></router-link></li>
      <li><router-link to="/hotlines"><span class="material-icons">phone</span></router-link></li>
      <li><router-link to="/trivia"><span class="material-icons">quiz</span></router-link></li>
      <li><router-link to="/journal"><span class="material-icons">layers</span></router-link></li>
      <li><router-link to="/game"><span class="material-icons">sports_esports</span></router-link></li>
    </ul>
  <div class="homepage">
    <div class="top-controls">
      <button class="audio-toggle" @click="showAudioPlayer = !showAudioPlayer">
        <span class="material-icons">audiotrack</span>
        <span class="button-text">{{ showAudioPlayer ? 'Hide Audio' : 'Audio Player' }}</span>
      </button>
      <AudioPlayer v-if="showAudioPlayer" @close="showAudioPlayer = false" />
    </div>

    <div class="info">
      <router-link to="/hotlines"><button><span class="material-icons">phone</span><span class="button-text">Hotlines/Info</span></button></router-link>
    </div>

    <div id="quoteDisplay" class="quote">{{ quote }}</div>
    <div class="activities">
        <router-link to="/trivia"><button><span class="material-icons">quiz</span><span class="button-text">Trivia</span></button></router-link>
        <router-link to="/journal"><button><span class="material-icons">layers</span><span class="button-text">Journal</span></button></router-link>
        <router-link to="/game"><button><span class="material-icons">sports_esports</span><span class="button-text">Game</span></button></router-link>
    </div>

  </div>
</template>

<style scoped>
.homepage {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.info {
  text-align: center;
  margin-bottom: 20px;
}

.quote {
  text-align: center;
  margin-bottom: 65px;
  font-size: 1.2rem;
  font-style: italic;
  line-height: 1.4;
  color: #b19cd9;
  background-color: rgb(90, 91, 139, 0.25);
  border-radius: 10px;
}

.activities {
  display: flex;
  justify-content: center;
}

.info button {
  width: 160px;
  height: 60px;
  font-size: 15px;
  padding: 10px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.activities button {
  width: 160px;
  height: 60px;
  font-size: 15px;
  padding: 10px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  margin-right: 20px;
}

</style>
