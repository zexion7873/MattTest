import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import login from '@/pages/Login'
import Translate from '@/pages/Translate'

Vue.use(Router)

export default new Router({
  // mode: 'hash',
  mode: 'history',
  base: '/MattTest/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/translate',
      name: 'translate',
      component: Translate
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }

  ]
})
