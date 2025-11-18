import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';

import AboutView from '../views/AboutView.vue';

import Welcome from '/components/Welcome.Vue';

// 1. Define route components.
// These are the components that will be rendered when the URL matches the path.

// 2. Define some routes
// Each route object maps a URL path to a component.

const routes = [

  {

    path: '/',

    name: 'Home',

    component: Welcome

  },

  {

    path: '/about',

    name: 'About',

    component: AboutView

  },

  // Example of a dynamic route (e.g., /users/1)

  {

    path: '/users/:id',

    name: 'UserDetail',

    // lazy loading is a good practice for performance

    component: () => import('../views/UserDetail.vue')

  }

];

 

// 3. Create the router instance and pass the `routes` array

// Use `createWebHistory()` for standard HTML5 History Mode

const router = createRouter({

  history: createWebHistory(import.meta.env.BASE_URL),

  routes

});

 

export default router;




