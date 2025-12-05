<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
    <div class="journal">
        <div class="back"><router-link to="/homepage"><button>Back</button></router-link></div>
          <form method="post" action="coding.js"> <!--IDK if this will work but the basic principals are there-->
            <label for="entry">Entry:</label><br>
            <textarea id="entry" name="entry" rows="5" cols="40" placeholder="Type your message here"></textarea>
            <input type="submit" name="submitEntry" value="Save" /> <!--IDK if the button works but we can change it later-->
            
        </form>
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