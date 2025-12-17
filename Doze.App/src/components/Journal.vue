<script setup>
import { ref, onMounted } from 'vue'

defineProps({
  msg: {
    type: String,
    required: true,
  },
})

const entryText = ref('')
const selectedMood = ref('meh')
const entries = ref([])

const moods = {
  happy: '😊',
  meh: '😐',
  sad: '😢'
}

// Load entries from local storage on component mount
onMounted(() => {
  const saved = localStorage.getItem('journalEntries')
  if (saved) {
    entries.value = JSON.parse(saved)
  }
})

// Save entry to local storage
const saveEntry = () => {
  if (entryText.value.trim() === '') {
    alert('Please write something before saving!')
    return
  }

  const newEntry = {
    id: Date.now(),
    text: entryText.value,
    mood: selectedMood.value,
    moodEmoji: moods[selectedMood.value],
    date: new Date().toLocaleString()
  }

  entries.value.push(newEntry)
  localStorage.setItem('journalEntries', JSON.stringify(entries.value))
  entryText.value = ''
  selectedMood.value = 'meh'
}

// Delete an entry
const deleteEntry = (id) => {
  entries.value = entries.value.filter(e => e.id !== id)
  localStorage.setItem('journalEntries', JSON.stringify(entries.value))
}

</script>

<template>
    <div class="journal">
        <div class="back"><router-link to="/homepage"><button>Back</button></router-link></div>
        
        <div class="entry-form">
          <h2>New Entry</h2>
          <div class="mood-selector">
            <label>How are you feeling?</label>
            <div class="mood-buttons">
              <button 
                v-for="(emoji, mood) in moods" 
                :key="mood"
                @click="selectedMood = mood"
                :class="['mood-btn', { active: selectedMood === mood }]"
                type="button">
                <span class="mood-emoji">{{ emoji }}</span>
                <span class="mood-label">{{ mood.charAt(0).toUpperCase() + mood.slice(1) }}</span>
              </button>
            </div>
          </div>
          <textarea 
            v-model="entryText" 
            rows="6" 
            cols="40" 
            placeholder="Write your thoughts here...">
          </textarea>
          <button @click="saveEntry" class="save-btn">Save Entry</button>
        </div>

        <div class="saved-entries">
          <h2>Saved Entries</h2>
          <div v-if="entries.length === 0" class="no-entries">
            No entries yet. Start writing!
          </div>
          <div v-for="entry in entries" :key="entry.id" class="entry-card">
            <div class="entry-header">
              <span class="entry-mood">{{ entry.moodEmoji }}</span>
              <div class="entry-date">{{ entry.date }}</div>
            </div>
            <div class="entry-text">{{ entry.text }}</div>
            <button @click="deleteEntry(entry.id)" class="delete-btn">Delete</button>
          </div>
        </div>
    </div>
    
</template>

<style scoped>
.journal {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.back {
  margin-bottom: 20px;
}

.entry-form {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
}

.entry-form h2 {
  margin-top: 0;
  color: #333;
}

.mood-selector {
  margin-bottom: 20px;
}

.mood-selector label {
  display: block;
  margin-bottom: 10px;
  color: #333;
  font-weight: bold;
}

.mood-buttons {
  display: flex;
  gap: 10px;
  justify-content: flex-start;
}

.mood-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 10px 15px;
  border: 2px solid #ddd;
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 14px;
}

.mood-btn:hover {
  border-color: #999;
  background-color: #fafafa;
}

.mood-btn.active {
  border-color: #4CAF50;
  background-color: #e8f5e9;
}

.mood-emoji {
  font-size: 24px;
}

.mood-label {
  font-size: 12px;
  color: #666;
}

textarea {
  width: 100%;
  padding: 10px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 14px;
}

button:hover {
  background-color: #45a049;
}

.save-btn {
  width: 100%;
}

.saved-entries h2 {
  color: #333;
  margin-top: 0;
}

.no-entries {
  text-align: center;
  color: #999;
  padding: 20px;
}

.entry-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.entry-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.entry-mood {
  font-size: 24px;
}

.entry-date {
  font-size: 12px;
  color: #999;
  flex: 1;
}

.entry-text {
  color: #333;
  line-height: 1.6;
  white-space: pre-wrap;
  word-wrap: break-word;
  margin-bottom: 10px;
}

.delete-btn {
  background-color: #f44336;
  padding: 5px 10px;
  font-size: 12px;
  width: auto;
}

.delete-btn:hover {
  background-color: #da190b;
}

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