<script setup>
  import HomeButton from './HomeButton.vue';
  import { ref } from 'vue'
  const showMore = ref(false)

  defineProps({
    msg: {
      type: String,
      required: true,
    },
  })

</script>

<template>
  <HomeButton />

  <div class="numbers">
    <h2>Hotline Numbers</h2>
    Suicide and Crisis Hotline: 988<br>
    Teen line (peer support for teens): 800-852-8336<br>
    Self Harm: 800-366-8288<br>
    NAMI HelpLine: 1-800-950-6264<br>
    Disaster Distress HotLine: 1-800-985-5990<br>
  </div>

  <div class="resources">
    <h2>Resources</h2>
    <a href="https://cimhs.com/?redirect=0">CIMHS Free Online Therapy</a><br>
    <a href="https://www.samhsa.gov/data/report/national-directory-of-mental-health-treatment-facilities">National Directory of Mental Health Treatment Facilities</a><br>
  </div>

  <div class="info links">
    <h2>More Information</h2>
    <a href="https://www.cdc.gov/mental-health/about/index.html">About Mental Health</a>
    <button class="moreButton" @click="showMore = !showMore">
      {{ showMore ? 'Hide details' : 'Show more' }}
    </button>
    
    <transition name="fade">
      <div v-if="showMore" class="details">
        <!-- Put the extra information here -->
        <p>Extra links, explanations, or contact info...</p>
      </div>
    </transition><br>

    <a href="https://www.cdc.gov/mental-health/about/about-behavioral-health.html">About Behavioral Health</a><br>
    <a href="https://my.clevelandclinic.org/health/diseases/17843-mood-disorders">Mood Disorders</a><br>
    <a href="https://my.clevelandclinic.org/health/diseases/9536-anxiety-disorders">Anxiety Disorders</a><br>
  </div>
 
    
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h2 {
  font-size: 1.6rem;  
  line-height: 1.4; /* Improve readability */

}


@media (min-width: 1024px) {
  .greetings h1,
  .greetings h2 {
    text-align: left;
  }
}

.numbers {
  margin-top: 20px;
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: left;
}

.resources {
  margin-top: 20px;
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: left;
}

.info.links {
  margin-top: 20px;
  font-size: 1rem;
  line-height: 1.6;
  text-align: left;
}

.moreButton {
  padding: 8px 12px;
  border-radius: 6px;
  background:#86aad9;
  border:none;
  cursor:pointer;
}
.details{ margin-top:10px; padding:10px; background:#f7f9fc; border-radius:6px; }

/* optional transition */
.fade-enter-active,.fade-leave-active{ transition: opacity .2s ease; }
.fade-enter-from,.fade-leave-to{ opacity:0; }

button:hover {
  background-color: #6b3780;
}

</style>