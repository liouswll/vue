import Vue from 'vue'
import Router from 'vue-router'
import Eninb from '@/ican/Enin'
import RouEnt from '@/ican/luou/rouent'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Eninb',
      component: Eninb
    },
    {
      path: '/home',
      name: 'RouEnt',
      component: RouEnt
    }
  ]
})
