<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})

</script>

<template>

        <div >
            <h1>Doze</h1>
            <router-link to="/homepage">
            <button>Continue</button>
            </router-link>
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
    text-align: center;
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
