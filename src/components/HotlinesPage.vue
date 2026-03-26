<script setup>
  import { ref } from 'vue'
  import AudioPlayer from '../AudioPlayer.vue';
  const showAMH = ref(false)
  const showABH = ref(false)
  const showMD = ref(false)
  const showAD = ref(false)
  const showAudioPlayer = ref(false);

  defineProps({
    msg: {
      type: String,
      required: true,
    },
  })
  import IconHome from './icons/IconHome.vue'

</script>

<template>
  <div class="hotlines">

    <div class="top-controls">
    <ul>
      <li><router-link to="/homepage" class="homeButton"><IconHome /><span>Home</span></router-link></li>
      <li><router-link to="/hotlines"><span class="material-icons">phone</span><span class="button-text">Hotlines/Info</span></router-link></li>
      <li><router-link to="/trivia"><span class="material-icons">quiz</span><span class="button-text">Trivia</span></router-link></li>
      <li><router-link to="/journal"><span class="material-icons">layers</span><span class="button-text">Journal</span></router-link></li>
      <li><router-link to="/game"><span class="material-icons">sports_esports</span><span class="button-text">Game</span></router-link></li>
    </ul>
      <button class="audio-toggle" @click="showAudioPlayer = !showAudioPlayer">
        <span class="material-icons">audiotrack</span>
        <span class="button-text">{{ showAudioPlayer ? 'Hide Audio' : 'Audio Player' }}</span>
      </button>
      <AudioPlayer v-if="showAudioPlayer" @close="showAudioPlayer = false" />
    </div>

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
    <a href="https://cimhs.com/?redirect=0" target="_blank" >CIMHS Free Online Therapy</a><br>
    <a href="https://www.samhsa.gov/data/report/national-directory-of-mental-health-treatment-facilities" target="_blank" >National Directory of Mental Health Treatment Facilities</a><br>
  </div>

  <div class="info links">                                                                                          <!-- ARTICLE LINKS -->
    <h2>More Information</h2>

    <div class="info-link-row">
      <a href="https://www.cdc.gov/mental-health/about/index.html" target="_blank" >About Mental Health</a>                            <!-- AMH link -->
      <button class="moreButton" @click="showAMH = !showAMH">                                                         <!-- AMH show more button -->
        {{ showAMH ? 'Less' : 'More' }}
      </button>
    </div>
    <transition name="fade">                                                                                        <!-- AMH summary info -->
      <div v-if="showAMH" class="details">
        <p>“Mental health is the component of behavioral health that includes our emotional, psychological, and social well-being. Mental health is a state of well-being that enables us to cope with the stresses of life,
        realize our abilities, learn well and work well, and contribute to our community.” -CDC</p><br>
        <dl>
          <dt>Mental health is closely linked to physical health. </dt>
          <dd>Depression can increase the risk of diabetes, heart disease, stroke, and long lasting chronic conditions. </dd>
          <dd>Tackling mental health and physical health can improve overall health. </dd>
          <dt>Help is available if you are suffering from mental health condition. </dt>
          <dt>Mental health is the presence of well being and the ability to thrive, NOT the absence of a mental health condition. </dt>
          <dd>Mental health can be influenced by the individual, family, community, and society levels. </dd>
          <dd>Even if you are living with a mental health condition you can still experience positive well being. Effective treatments can help manage symptoms along with safe, stable, and nurturing relationships and environments. </dd>
          <dd>People living without mental health conditions may still face challenges to their mental health. </dd>
        </dl>
      </div>
    </transition>

    <div class="info-link-row">
      <a href="https://www.cdc.gov/mental-health/about/about-behavioral-health.html" target="_blank" >About Behavioral Health</a>      <!-- ABH link, button, and info -->
      <button class="moreButton" @click="showABH = !showABH">
        {{ showABH ? 'Less' : 'More' }}
      </button>
    </div>
    <transition name="fade">
      <div v-if="showABH" class="details">
        <p>“Behavioral health refers to a state of mental, emotional, and social well-being or behaviors and actions that affect wellness. Behavioral health is a key component of overall health.
        The term is also used to describe the support systems that promote well-being, prevent mental distress, and provide access to treatments and services for mental health conditions.” -CDC</p><br>
        <p>Behavioral health is a key component of overall health.
        Positive behavioral health includes social determinants of health, supporting the environments where we work, learn, and play.
        Behavioral health is an umbrella term for mental health, suicidal thoughts or attempts, and substance use/substance use disorders.
        Suicide is one of the leading cause of death in the United States.
        People may turn to drugs, alcohol, and other substances to help them cope with stress, trauma, or mental distress.
        </p>
      </div>
    </transition>

    <div class="info-link-row">
      <a href="https://my.clevelandclinic.org/health/diseases/17843-mood-disorders" target="_blank" >Mood Disorders</a>                <!-- MD link, button, and info -->
      <button class="moreButton" @click="showMD = !showMD">
        {{ showMD ? 'Less' : 'More' }}
      </button>
    </div>
    <transition name="fade">
      <div v-if="showMD" class="details">
        <p>“A mood disorder is a mental health condition that primarily affects your emotional state. They can cause persistent and intense sadness, elation and/or anger.
        Mood disorders are treatable — usually with a combination of medication and psychotherapy (talk therapy).” - Cleveland Clinic</p><br>
        <p>It’s normal for moods to change, however, for a mood disorder diagnosis, symptoms must be present for several weeks or longer.</p>
        <p>You can experience long periods of extreme happiness, extreme sadness or both.
        Certain mood disorders can involve other emotions such as anger and irritability.
        They can cause changes in behavior and affect your ability to perform routine tasks, such as work or school.</p><br>
        <p>Mood disorders:</p>
        <p>Depression and its Subtypes</p>
        <blockquote>Symptoms include feelings of sadness or hopelessness, and can cause difficulty with thinking, memory, eating, and sleeping.</blockquote>
        <p>Bipolar Disorder and its Subtypes</p>
        <blockquote>Lifelong mood disorder that causes intense shifts in mood, energy levels, thinking patterns and behavior.</blockquote>
        <p>Premenstrual Dysphoric Disorder</p>
        <blockquote>Type of mood disorder that occurs seven to ten days before menstruation and goes away within a few days of the start of the menstrual period.</blockquote>
        <p>Disruptive Mood Dysregulation Disorder</p>
        <blockquote>Affects children and adolescents, involves frequent anger outburst and irritability out of proportion to the situation.</blockquote>
      </div>
    </transition>

    <div class="info-link-row">
      <a href="https://my.clevelandclinic.org/health/diseases/9536-anxiety-disorders" target="_blank" >Anxiety Disorders</a>           <!-- AD link, button, and info -->
      <button class="moreButton" @click="showAD = !showAD">
        {{ showAD ? 'Less' : 'More' }}
      </button>
    </div>
    <transition name="fade">
      <div v-if="showAD" class="details">
        <!-- Put the extra information here -->
        <p>“Anxiety disorders are a group of mental health conditions that cause fear, dread and other symptoms that are out of proportion to the situation. There are several types,
        including generalized anxiety disorder, specific phobias and social anxiety disorder. Treatment is effective and usually includes medication and psychotherapy (talk therapy).” - Cleveland Clinic
        </p><br>
        <p>Respond to certain things or situations with fear and dread. May also experience physical signs of anxiety, such as sweating and pounding heart.
        Having some anxiety is normal, such as problems at work, taking a test or making an important decision.
        Some can even be beneficial since it can help us notice dangerous situations and focuse our attention to stay safe.</p><br>
        <p>Anxiety is a disorder when:</p>
        <p>It interferes with your ability to function</p>
        <p>It causes overreactions</p>
        <p>You can't control responses to situations</p>
        <p>Plus, women are twice as likely as men to have an anxiety disorder</p><br>
        <p>Psychological syptoms may include:</p>
        <p>Feeling panic, fear, dread, and uneasiness</p>
        <p>Feeling on edge or irritable</p>
        <p>Uncontrollable, obsessive thoughts</p>
        <p>Difficulty concentrating</p><br>
        <p>Physical symptoms may include:</p>
        <p>Restlessness</p>
        <p>Heart palpitaitions</p>
        <p>Shortness of breath</p>
        <p>Muscle tension</p>
        <p>Cold or sweaty hands</p>
        <p>Nausea
        </p>
      </div>
    </transition>
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

h2 {
  font-size: 1.6rem;
  line-height: 1.4; /* Improve readability */

}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #362648;
}

ul li {
  float: left;
}

ul li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

ul li a:hover {
  background-color: #111111;
}

blockquote {
  margin-left: 5%;
}

.audio-toggle {
  margin-bottom: 12px;
  background-color: #362648;
  color: #f4cee1;
  border: none;
  border-radius: 60px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.audio-toggle:hover {
  background-color: #593f89;
}

.top-controls {
  position: fixed;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.top-controls :deep(.audio-player) {
  margin-top: 0;
}


.hotlines::before {
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

.numbers {
  margin-top: 190px;
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

.info-link-row {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 10px;
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
  border:none;
  cursor:pointer;
}
.details{
  color: black;
  margin-top:10px;
  max-width: 600px;
  padding:10px;
  background: transparent; /* use overlay pseudo-element for translucent background */
  border-radius:6px;
  position: relative; /* establish containing block for ::before */
}

.details::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(253,228,202,0.45); /* semi-transparent background; adjust alpha */
  z-index: 0;
  border-radius: inherit; /* match .details rounded corners */
  pointer-events: none;
}
.details > * { position: relative; z-index: 1; }

/* optional transition */
.fade-enter-active,.fade-leave-active{ transition: opacity .2s ease; }
.fade-enter-from,.fade-leave-to{ opacity:0; }

button:hover {
  background-color: #6b3780;
}

</style>
