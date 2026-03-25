<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})

</script>

<template>
    <div class="welcome">
      <h1>Doze</h1>
      <router-link to="/homepage"><button>Continue</button></router-link>

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
  font-family: 'Georgia', serif;  /* Add this line */
}

.welcome::before {
    content: '';
      position: fixed;
        inset: 0;              /* same as top: 0; left: 0; right: 0; bottom: 0; */
          background: radial-gradient(circle, #0e1f6c 0%, #a881cf 100%);
            background-size: 200% 200%;
              animation: animated-gradient-wave 8s ease-in-out infinite;
                z-index: -1;
                  pointer-events: none;
                  }

                  @keyframes animated-gradient-wave {
                    0%,
                      100% {
                          background-position: 0% 50%;
                            }
                              50% {
                                  background-position: 100% 50%;
                                    }
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
  width: 200px;
  height: 55px;
  font-size: 1.2rem;
  padding: 10px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: 'Georgia', serif;
  font-weight: 500;
}

</style>
