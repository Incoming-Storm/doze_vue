<script setup>
defineProps({
    msg: {
        type: String,
        required: true,
    },
})
</script>



<template>

  <div class="homepage">

    <div class="back"><router-link to="/"><button>Back</button></router-link></div>
    <div class="info">
      <router-link to="/hotlines"><button>Hotlines</button></router-link>
    </div>

    <div id="quoteDisplay" class="quote"></div>
        <!-- <script>
            console.log(quoteDisplay);
        </script> -->

        <div class="activities">
          <a href="trivia.html"><button>Trivia</button></a>
          <a href="journal.html"><button>Journal</button></a>
          <a href="game.html"><button>Game</button></a>
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
