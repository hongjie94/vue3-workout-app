import { createRouter, createWebHistory } from 'vue-router'
import firebase from 'firebase/app'
import 'firebase/auth'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Workouts from '../views/Workouts.vue'
import Dashbroad from '../views/Dashbroad.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/workouts',
    name: 'Workouts',
    component: Workouts
  },
  {
    path: '/dashbroad',
    name: 'Dashbroad',
    component: Dashbroad
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = firebase.auth().currentUser
  if (requiresAuth && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router
