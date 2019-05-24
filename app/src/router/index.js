import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Bewoners from '@/components/Bewoners'
import Help from '@/components/Help'
import Huis from '@/components/Huis'
import Instellingen from '@/components/Instellingen'
import Over from '@/components/Over'
import Verbruik from '@/components/Verbruik'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/bewoners',
      name: 'bewoners',
      component: Bewoners
    },
    {
      path: '/help',
      name: 'help',
      component: Help
    },
    {
      path: '/huis',
      name: 'huis',
      component: Huis
    },
    {
      path: '/instellingen',
      name: 'instellingen',
      component: Instellingen
    },
    {
      path: '/over',
      name: 'over',
      component: Over
    },
    {
      path: '/verbruik',
      name: 'verbruik',
      component: Verbruik
    }
  ]
})
