import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/account/login',
      name: 'account-login',
      component: () => import('./views/Account/Login.vue')
    },
    {
      path: '/account/profile',
      name: 'account-profile',
      component: () => import('./views/Account/Profile.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/account/register',
      name: 'account-register',
      component: () => import('./views/Account/Register.vue')
    },
    {
      path: '*',
      name: 'not-found',
      component: () => import('./views/NotFound.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isAuthed) {
      next()
    } else {
      next('/account/login')
    }
  } else {
    next()
  }
})

export default router
