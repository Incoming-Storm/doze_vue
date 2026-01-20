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
        <p>“Mental health is the component of behavioral health that includes our emotional, psychological, and social well-being. Mental health is a state of well-being that enables us to cope with the stresses of life, 
        realize our abilities, learn well and work well, and contribute to our community.” -CDC</p><br>
        <dl>
          <dt>Mental health is closely linked to physical health. </dt>
          <dd>Depression can increase the risk of diabetes, heart disease, stroke, and long lasting chronic conditions. </dd>
          <dd>Tackling mental health and physical health can improve overall health. </dd>
          <dt>Help is available if you are suffering from mental health condition. </dt>
          <dt>Mental health is the presence of well being and the ability to thrive NOT the absence of a mental health condition. </dt>
          <dd>Mental health can be influenced by the individual, family, community, and society levels. </dd>
          <dd>Even if you are living with a mental health condition you can still experience positive well being. Effective treatments can help manage symptoms along with safe, stable, and nurturing relationships and environments. </dd>
          <dd>People living without mental health conditions may still face challenges to their mental health. </dd>
        </dl>
      </div>
    </transition><br>

    <a href="https://www.cdc.gov/mental-health/about/about-behavioral-health.html">About Behavioral Health</a>      <!-- ABH link, button, and info -->
    <button class="moreButton" @click="showABH = !showABH">
      {{ showABH ? 'Less' : 'More' }}
    </button>
    <transition name="fade">
      <div v-if="showABH" class="details">
        <p>“Behavioral health refers to a state of mental, emotional, and social well-being or behaviors and actions that affect wellness. Behavioral health is a key component of overall health. 
        The term is also used to describe the support systems that promote well-being, prevent mental distress, and provide access to treatments and services for mental health conditions.” -CDC</p><br>
        <p>Behavior health is a key component of overall health 
        Positive behavioral health includes social determinants of health, supporting the environments where we work, learn, and play. 
        Behabioral health is an umbrella for mental health, suicidal thoughts or suicide attempt, and substance use or substance use disorders. 
        Suicide is one of the leading cause of death in the United States.
        People may turn to drugs, alcohol, and other substances to help them cope with stress, trauma, or mental distress.
        </p>
      </div>
    </transition><br>

    <a href="https://my.clevelandclinic.org/health/diseases/17843-mood-disorders">Mood Disorders</a>                <!-- MD link, button, and info -->
    <button class="moreButton" @click="showMD = !showMD">
      {{ showMD ? 'Less' : 'More' }}
    </button>
    <transition name="fade">
      <div v-if="showMD" class="details">
        <p>“A mood disorder is a mental health condition that primarily affects your emotional state. They can cause persistent and intense sadness, elation and/or anger. 
        Mood disorders are treatable — usually with a combination of medication and psychotherapy (talk therapy).” - Cleveland Clinic</p><br> 
        <p>It’s normal for moods to change, however, for mood disorder diagnosis, symptoms must be present for several weeks or longer.
        Can experience long periods of extreme happiness, extreme sadness or both. 
        Certain mood disorders can involve other emotions, such as anger and irritability.
        Cause changes in behavior and affect the ability to perform routine tasks, such as work or school. 
        Mood disorders: 
        Depression and its subtypes
        Symptoms include feelings of sadness or hopelessness, and can cause difficulty with thinking, memory, eating, and sleeping. 
        Bipolar disorder and its subtypes
        Lifelong mood disorder that causes intense shifts in mood, energy levels, thinking patterns and behavior. 
        Premenstrual dysphoric disorder
        Type of mood disorder that occurs seven to ten days before menstruation and goes away within a few days of the start of the menstrual period. 
        Disruptive mood dysregulation disorder
        Affects children and adolescents, involves frequent anger outburst and irritability out of proportion to the situation.
        </p>
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
        including generalized anxiety disorder, specific phobias and social anxiety disorder. Treatment is effective and usually includes medication and psychotherapy (talk therapy).” - Cleveland Clinic
        </p><br>
        <p>Respond to certain things or situations with fear and dread. May also experience physical signs of anxiety, such as sweating and pounding heart. 
        Having some anxiety is normal, such as problems at work, taking a test or making an important decision.
        Some can even be beneficial since it can help us notice dangerous situations and focuse our attention to stay safe. 
        Anxiety disorder happens when:
        Interderes with the ability to function 
        Overreactions
        Can’t control responses to situations
        Women are twice as likely as men to have anxiety disorder. 
        Psychological syptoms may include:
        Feeling panic, fear, dread, and uneasiness
        Feeling on edge or irritable
        Uncontrollable, obsessive thoughts
        Difficulty concentrating
        Physical symptoms may include:
        Restlessness
        Heart palpitaitions
        Shortness of breath
        Muscle tension
        Cold or sweaty hands
        Nausea
        </p>
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
  line-height: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  border-radius: 6px;
  background:#86aad9;
  border:none;
  cursor:pointer;
}
.details{ 
  color: black;
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