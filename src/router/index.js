import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import pageList from '@/pages/PageList'
import AsyncAwait from '@/pages/AsyncAwait'
import Translate from '@/pages/Translate'
import NPS_TW from '@/pages/NPSCloseTW'
import NPS_EN from '@/pages/NPSCloseEN'

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
      path: '/pageList',
      name: 'pageList',
      component: pageList
    },
    {
      path: '/asyncAwait',
      name: 'asyncAwait',
      component: AsyncAwait
    },
    {
      path: '/translate',
      name: 'translate',
      component: Translate
    },
    {
      path: '/NPS_EN',
      name: 'NPS_EN',
      component: NPS_EN
    },
    {
      path: '/NPS_TW%23first-element',
      name: 'NPS_TW',
      component: NPS_TW
    },
    {
      path: '/NPS_TW',
      name: 'NPS_TW',
      component: NPS_TW
    },
    {
      path: '/scb/vi_login',
      name: 'NPS_TW',
      component: NPS_TW
    }

  ]
})
