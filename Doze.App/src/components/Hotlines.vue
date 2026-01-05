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

      Suicide and Crisis Hotline: 988<br>
      Teen line (peer support for teens): 800-852-8336<br>
      Self Harm: 800-366-8288<br>
      NAMI HelpLine: 1-800-950-6264<br>
      Disaster Distress HotLine: 1-800-985-5990
 
    
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

button {
  width: 150px;
  height: 50px;
  font-size: 1.2rem;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #86aad9;
  color: rgb(11, 8, 8);
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #6b3780;
}



</style>