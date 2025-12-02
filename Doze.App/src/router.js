import { createRouter, createWebHistory } from 'vue-router';

import Welcome from './components/Welcome.vue';
import Homepage from './components/Homepage.vue';

// 1. Define route components.
// These are the components that will be rendered when the URL matches the path.

// 2. Define some routes
// Each route object maps a URL path to a component.

const routes = [

  {path: '/', name: 'Homes', component: Welcome}

  ,{path: '/homepage', name: 'Homepage', component: Homepage} 



  // Example of a dynamic route (e.g., /users/1)

  

];

 

// 3. Create the router instance and pass the `routes` array

// Use `createWebHistory()` for standard HTML5 History Mode

const router = createRouter({

  history: createWebHistory(import.meta.env.BASE_URL),

  routes

});

 

export default router;




