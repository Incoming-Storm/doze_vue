<script setup>
  import HomeButton from './HomeButton.vue';
  import { ref } from 'vue'
  const showAMH = ref(false)
  const showABH = ref(false)
  const showMD = ref(false)
  const showAD = ref(false)

  defineProps({
    msg: {
      type: String,
      required: true,
    },
  })

</script>

<template>
  <HomeButton />

  <div class="numbers">                                                                                             <!-- HOTLINE NUMBERS -->
    <h2>Hotline Numbers</h2>
    <p>Suicide and Crisis Hotline: 988<br>
    Teen line (peer support for teens): 800-852-8336<br>
    Self Harm: 800-366-8288<br>
    NAMI HelpLine: 1-800-950-6264<br>
    Disaster Distress HotLine: 1-800-985-5990<br></p>
  </div>

  <div class="resources">
    <h2>Resources</h2>
    <a href="https://cimhs.com/?redirect=0">CIMHS Free Online Therapy</a><br>
    <a href="https://www.samhsa.gov/data/report/national-directory-of-mental-health-treatment-facilities">National Directory of Mental Health Treatment Facilities</a><br>
  </div>

  <div class="info links">                                                                                          <!-- ARTICLE LINKS -->
    <h2>More Information</h2>

    <a href="https://www.cdc.gov/mental-health/about/index.html">About Mental Health</a>                            <!-- AMH link -->
    <button class="moreButton" @click="showAMH = !showAMH">                                                         <!-- AMH show more button -->
      {{ showAMH ? 'Less' : 'More' }}
    </button>
    <transition name="fade">                                                                                        <!-- AMH summary info -->
      <div v-if="showAMH" class="details">
        <!-- Put the extra information here -->
        <p>“Mental health is the component of behavioral health that includes our emotional, psychological, and social well-being. Mental health is a state of well-being that enables us to cope with the stresses of life, 
        realize our abilities, learn well and work well, and contribute to our community.” -CDC</p>
      </div>
    </transition><br>

    <a href="https://www.cdc.gov/mental-health/about/about-behavioral-health.html">About Behavioral Health</a>      <!-- ABH link, button, and info -->
    <button class="moreButton" @click="showABH = !showABH">
      {{ showABH ? 'Less' : 'More' }}
    </button>
    <transition name="fade">
      <div v-if="showABH" class="details">
        <p>“Behavioral health refers to a state of mental, emotional, and social well-being or behaviors and actions that affect wellness. Behavioral health is a key component of overall health. 
        The term is also used to describe the support systems that promote well-being, prevent mental distress, and provide access to treatments and services for mental health conditions.” -CDC</p>
      </div>
    </transition><br>

    <a href="https://my.clevelandclinic.org/health/diseases/17843-mood-disorders">Mood Disorders</a>                <!-- MD link, button, and info -->
    <button class="moreButton" @click="showMD = !showMD">
      {{ showMD ? 'Less' : 'More' }}
    </button>
    <transition name="fade">
      <div v-if="showMD" class="details">
        <!-- Put the extra information here -->
        <p>“A mood disorder is a mental health condition that primarily affects your emotional state. They can cause persistent and intense sadness, elation and/or anger. 
        Mood disorders are treatable — usually with a combination of medication and psychotherapy (talk therapy).” - Cleveland Clinic</p>
      </div>
    </transition><br>

    <a href="https://my.clevelandclinic.org/health/diseases/9536-anxiety-disorders">Anxiety Disorders</a>           <!-- AD link, button, and info -->
    <button class="moreButton" @click="showAD = !showAD">
      {{ showAD ? 'Less' : 'More' }}
    </button>
    <transition name="fade">
      <div v-if="showAD" class="details">
        <!-- Put the extra information here -->
        <p>“Anxiety disorders are a group of mental health conditions that cause fear, dread and other symptoms that are out of proportion to the situation. There are several types, 
        including generalized anxiety disorder, specific phobias and social anxiety disorder. Treatment is effective and usually includes medication and psychotherapy (talk therapy).” - Cleveland Clinic</p>
      </div>
    </transition><br>
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
  width: 75px;
  height: 30px;
  padding: 8px 12px;
  border-radius: 6px;
  background:#86aad9;
  border:none;
  cursor:pointer;
}
.details{ 
  margin-top:10px; 
  max-width: 600px;
  padding:10px; 
  background:#f7f9fc; 
  border-radius:6px; 
}

/* optional transition */
.fade-enter-active,.fade-leave-active{ transition: opacity .2s ease; }
.fade-enter-from,.fade-leave-to{ opacity:0; }

button:hover {
  background-color: #6b3780;
}

</style>