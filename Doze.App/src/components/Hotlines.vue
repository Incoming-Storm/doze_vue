<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})

</script>

<template>
  <router-link to="/Homepage"><button>Back</button></router-link>
    <h2>Hotline Numbers</h2>
    <ul>
      <li>Suicide and Crisis Hotline: 988</li>
      <li>Teen line (peer support for teens): 800-852-8336</li>
      <li>Self Harm: 800-366-8288</li>
      <li>NAMI HelpLine: 1-800-950-6264</li>
      <li>Disaster Distress HotLine: 1-800-985-5990</li>
    </ul>
  
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