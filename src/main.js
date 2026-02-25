import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import VueSound from 'vue-sound'

import router from './router'; // Import the router you created
 
const app = createApp(App);

app.use(router); // Tell the app to use the router
app.use(VueSound); // Register VueSound component

app.mount('#app');
