import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/Home.vue'
import About from '../components/About.vue'
import z2 from '../components/z2.vue'
import swiperVue from '../components/swiperVue.vue'
// import About2 from '../components/About2.vue'

export default createRouter({
  history : createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: About
    // },
    {path: '/about',name: 'about',component: About},
    {path: '/z2',name: 'z2',component: z2},
    {path: '/swiperVue',name: 'swiperVue',component: swiperVue}
    // {path: '/about2',name: 'about2',component: About2}

  ]
})

// export default router