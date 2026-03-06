import { createRouter, createWebHistory } from 'vue-router';

import Welcome from './components/Welcome.vue';
import Homepage from './components/HomePage.vue';
import Hotlines from './components/HotlinesPage.vue';
import Game from './components/Game.vue';
import Trivia from './components/TriviaPage.vue';
import Journal from './components/JournalPage.vue';

// 1. Define route components.
// These are the components that will be rendered when the URL matches the path.

// 2. Define some routes
// Each route object maps a URL path to a component.

const routes = [

  {path: '/', name: 'Homes', component: Welcome},
  {path: '/homepage', name: 'Homepage', component: Homepage},
  {path: '/hotlines', name: 'Hotlines', component: Hotlines, meta: { transition: 'slide-left' }},
  {path: '/game', name: 'Game', component: Game},
  {path: '/trivia', name: 'Trivia', component: Trivia},
  {path: '/journal', name: 'Journal', component: Journal}

  // Example of a dynamic route (e.g., /users/1)
];

// 3. Create the router instance and pass the `routes` array

// Use `createWebHistory()` for standard HTML5 History Mode

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes

});

export default router;




