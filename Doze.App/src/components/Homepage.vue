<script setup>
import { ref } from 'vue'

defineProps({
    msg: {
        type: String,
        required: true,
    },
})

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
console.log(quote.value);

</script>



<template>
  <div class="homepage">

    <div class="back"><router-link to="/"><button>Back</button></router-link></div>
    <div class="info">
      <router-link to="/hotlines"><button>Hotlines</button></router-link>
    </div>

    <div id="quoteDisplay" class="quote">{{ quote }}</div>
      <div class="activities">
        <router-link to="/trivia"><button>Trivia</button></router-link>
        <router-link to="/journal"><button>Journal</button></router-link>
        <router-link to="/game"><button>Game</button></router-link>
      </div>

  </div>

</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
