<script setup>
import { ref } from 'vue'
import AudioPlayer from '../AudioPlayer.vue';

defineProps({
  msg: {
    type: String,
    required: true,
  },
})

const questions = [
  {
    id: 1,
    question: "Depression is just being sad and will go away on its own.",
    answer: false,
    explanation: "Depression is a serious mental health condition that often requires professional treatment. It's more than just sadness."
  },
  {
    id: 2,
    question: "Anxiety disorders are the most common mental health condition in adults.",
    answer: true,
    explanation: "Anxiety disorders affect millions of people worldwide and are highly treatable."
  },
  {
    id: 3,
    question: "Mental health issues are a sign of weakness.",
    answer: false,
    explanation: "Mental health conditions are medical conditions, not character flaws. Anyone can experience them regardless of strength or resilience."
  },
  {
    id: 4,
    question: "Exercise can help improve mental health and reduce stress.",
    answer: true,
    explanation: "Regular physical activity has been proven to reduce anxiety, depression, and stress while improving overall mental well-being."
  },
  {
    id: 5,
    question: "You can catch a mental health disorder from someone else.",
    answer: false,
    explanation: "Mental health conditions are not contagious. They result from a combination of genetic, biological, and environmental factors."
  },
  {
    id: 6,
    question: "Getting enough sleep is important for mental health.",
    answer: true,
    explanation: "Sleep plays a crucial role in emotional regulation and mental health. Lack of sleep can worsen depression and anxiety."
  },
  {
    id: 7,
    question: "People with mental health conditions cannot work or be successful.",
    answer: false,
    explanation: "Many successful people manage mental health conditions and lead productive, fulfilling lives with proper treatment and support."
  },
  {
    id: 8,
    question: "Mindfulness and meditation can help reduce stress and anxiety.",
    answer: true,
    explanation: "Research shows mindfulness and meditation techniques are effective for managing stress, anxiety, and promoting mental well-being."
  },
  {
    id: 9,
    question: "Therapy is only for people with serious mental health problems.",
    answer: false,
    explanation: "Therapy can benefit anyone seeking personal growth, stress management, or help with life challenges, regardless of severity."
  },
  {
    id: 10,
    question: "Social support and relationships are important for mental health.",
    answer: true,
    explanation: "Strong social connections and supportive relationships are key protective factors for mental health and well-being."
  },
  { id: 11,
    question: "Mental health is closely linked to physical health.",
    answer: true,
    explanation: "Mental and physical health are deeply linked through the mind-body connection, where stress, emotions, and thoughts directly trigger physical responses."
  },
  { id: 12,
    question: "Depression doesn’t increase the risk of long lasting chronic conditions.",
    answer: false,
    explanation: "Research shows that depression significantly increases the risk of developing conditions like heart disease, diabetes, stroke, and inflammation."
  },
  { id: 13,
    question: "Help is available if you are suffering from mental health condition(s).",
    answer: true,
    explanation: "Please go to the Hotlines page for more details on mental health conditions."
  },
  { id: 14,
    question: "People living without mental health conditions never face challenges to their mental health.",
    answer: false,
    explanation: "Mental health exists on a spectrum and everyone experiences stress, anxiety, or sadness at times, even if they are not diagnosed with a mental health condition."
  },
  { id: 15,
    question: "Mental health is the presence of well being and the ability to thrive.",
    answer: true,
    explanation: "Well-being and thriving involve feeling and functioning well, which is crucial because this state boosts overall physical and mental health."
  },
  { id: 16,
    question: "People with mental health conditions can’t experience positive well being.",
    answer: false,
    explanation: "Well-being and thriving involve feeling and functioning well, which is crucial because this state boosts overall physical and mental health."
  },
  { id: 17,
    question: "Behavior health is a key element of overall well being.",
    answer: true,
    explanation: "Behavior health is is intrinsically linked to physical health."
  },
  { id: 18,
    question: "Behavioral health is not an umbrella term for mental health.",
    answer: false,
    explanation: "Mental health pertains to a person's psychological state, while behavioral health entails a person's state of mind and their physical condition."
  },
  { id: 19,
    question: "It’s normal to have mood swings from time to time as long as they are temporary.",
    answer: true,
    explanation: "Emotions are designed to be fluid, acting as a natural, temporary response to internal and external stimuli."
  },
  { id: 20,
    question: "People don’t turn to drugs and other substances to help them cope with their mental distress.",
    answer: false,
    explanation: "People might turn to substances to temporarily numb or manage painful emotions or effects of trauma."
  },
  { id: 21,
    question: "Mood disorders can affect the ability to perform daily tasks for work or school.",
    answer: true,
    explanation: "Moods can influence perception, motivation, decision-making, social interactions, and even basic cognitive processes like memory and attention."
  },
  { id: 22,
    question: "Mood disorders can only cause extreme sadness.",
    answer: false,
    explanation: "Mood disorders can include a broad spectrum of emotional disturbances, ranging from severe lows such as depression or extreme highs or a mix of both."
  },
  { id: 23,
    question: "Anxiety disorders may also have physical signs.",
    answer: true,
    explanation: "Anxiety disorders exhibit physical symptoms because they trigger the body's “fight for flight” response."
  },
  { id: 24,
    question: "Men are twice as likely as women to have anxiety disorders.",
    answer: false,
    explanation: "Women are twice as likely as men to have anxiety disorders and it could be because of differences in brain chemistry and hormone fluctuations"
  }
]

const currentQuestionIndex = ref(0)
const answered = ref(false)
const isCorrect = ref(null)
const showExplanation = ref(false)
const askedQuestions = ref(new Set())

const currentQuestion = () => {
  return questions[currentQuestionIndex.value]
}

const getRandomQuestion = () => {
  let randomIndex
  do {
    randomIndex = Math.floor(Math.random() * questions.length)
  } while (askedQuestions.value.has(randomIndex) && askedQuestions.value.size < questions.length)

  if (askedQuestions.value.size === questions.length) {
    askedQuestions.value.clear()
  }

  askedQuestions.value.add(randomIndex)
  currentQuestionIndex.value = randomIndex
}

const answerQuestion = (userAnswer) => {
  answered.value = true
  isCorrect.value = userAnswer === currentQuestion().answer
  showExplanation.value = true
}

const nextQuestion = () => {
  getRandomQuestion()
  answered.value = false
  isCorrect.value = null
  showExplanation.value = false
}

const skipQuestion = () => {
  nextQuestion()
}

const showAudioPlayer = ref(false);

</script>

<template>
    <ul>
      <li><router-link to="/homepage"><span class="material-icons">home</span></router-link></li>
      <li><router-link to="/hotlines"><span class="material-icons">phone</span></router-link></li>
      <li><router-link to="/trivia"><span class="material-icons">quiz</span></router-link></li>
      <li><router-link to="/journal"><span class="material-icons">layers</span></router-link></li>
      <li><router-link to="/game"><span class="material-icons">sports_esports</span></router-link></li>
    </ul>
  <div class="trivia">
    <div class="top-controls">
      <button class="audio-toggle" @click="showAudioPlayer = !showAudioPlayer">
        <span class="material-icons">audiotrack</span>
        <span class="button-text">{{ showAudioPlayer ? 'Hide Audio' : 'Audio Player' }}</span>
      </button>
      <AudioPlayer v-if="showAudioPlayer" @close="showAudioPlayer = false" />
    </div>

        <div class="quiz-container">
          <div class="question-label">Mental Health Trivia</div>

          <h2 class="question-text">{{ currentQuestion().question }}</h2>

          <div v-if="!answered" class="button-group">
            <button @click="answerQuestion(true)" class="btn btn-true">True</button>
            <button @click="answerQuestion(false)" class="btn btn-false">False</button>
          </div>

          <div v-if="answered" class="feedback">
            <div :class="['result', isCorrect ? 'correct' : 'incorrect']">
              <span class="result-icon">{{ isCorrect ? '✓' : '✗' }}</span>
              <span class="result-text">{{ isCorrect ? 'Correct!' : 'Incorrect' }}</span>
            </div>

            <div v-if="showExplanation" class="explanation">
              <strong>Explanation:</strong>
              <p>{{ currentQuestion().explanation }}</p>
            </div>

            <div class="next-buttons">
              <button @click="nextQuestion" class="btn btn-next">Next Question</button>
            </div>
          </div>

          <button v-if="!answered" @click="skipQuestion" class="skip-btn">Skip</button>
        </div>
  </div>

</template>

<style scoped>
.trivia {
  max-width: 700px;
  margin: 0 auto;
  padding: 200px 20px 20px;
}

.quiz-container {
  background-color: #d2c6e4;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.question-label {
  font-size: 20px;
  color: #3b3e66;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.question-text {
  color: black;
  margin: 20px 0 30px 0;
  font-size: 25px;
  line-height: 1.6;
}

.button-group {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.btn {
  flex: 1;
  padding: 15px;
  border: none;
  border-radius: 6px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-true {
  background-color: #76c27a;
  color: rgb(255, 255, 255);
}

.btn-true:hover {
  background-color: #63c966;
  transform: translateY(-2px);
}

.btn-false {
  background-color: #c8837e;
  color: rgb(255, 255, 255);
}

.btn-false:hover {
  background-color: #f26662;
  transform: translateY(-2px);
}

.btn-next {
  background-color: #4c66af;
  color: white;
  width: 100%;
}

.btn-next:hover {
  background-color: #3b3e66;
}

.skip-btn {
  width: 100%;
  padding: 10px;
  background-color: #9e9e9e;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 20px;
  margin-top: 10px;
}

.skip-btn:hover {
  background-color: #757575;
}

.feedback {
  margin: 20px 0;
}

.result {
  padding: 15px;
  border-radius: 6px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: bold;
}

.result.correct {
  background-color: #c8e6c9;
  color: #6bad6e;
}

.result.incorrect {
  background-color: #ffcdd2;
  color: #c26666;
}

.result-icon {
  font-size: 20px;
}

.explanation {
  background-color: #a2a0d5;
  border-left: 4px solid #5a5b8b;
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 15px;
}

.explanation strong {
  color: black;
}

.explanation p {
  margin: 8px 0 0 0;
  color: #333;
  line-height: 1.6;
}

.next-buttons {
  display: flex;
  gap: 10px;
}

</style>
