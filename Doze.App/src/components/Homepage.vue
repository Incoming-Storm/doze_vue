<script setup>
import { ref } from 'vue'

defineProps({
    msg: {
        type: String,
        required: true,
    },
})

const quotes = [
    "\"The only way to do great work is to love what you do.\" - Steve Jobs",
    "\"Success is not the key to happiness. Happiness is the key to success.\" - Albert Schweitzer",
    "\"Believe you can and you're halfway there.\" - Theodore Roosevelt",
    "\"Your time is limited, so don't waste it living someone else's life.\" - Steve Jobs",
    "\"The best way to predict the future is to invent it.\" - Alan Kay"
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
        <!-- <script>
            console.log(quoteDisplay);
        </script> -->

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
