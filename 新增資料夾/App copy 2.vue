<template>
  <div>

    <!-- <v-app>
    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app> -->

    <navibar></navibar>
    <banner></banner>
    <hr class="my-5" />
    <swiperVue></swiperVue>
    <hr class="my-5" />
    <Expansion></Expansion>
    <!-- <hr class="my-5" /> -->
    <!-- <carousel></carousel> -->
    <!-- <hr class="my-5" /> -->
    <!-- <prop></prop> -->
  
    <hover></hover>

     <hr class="my-5" />


    <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <h1 class="text-h4 font-weight-thin mb-4">
          Vuetify
        </h1>
        <!-- <h4 class="subheading">
          Build your application today!
        </h4> -->

        <timeview></timeview>
      </div>
    </v-parallax>
    <hr class="my-5" />
    <card></card>
    <hr class="my-5" />
    <Dcubj></Dcubj>
    <iFrame2></iFrame2>
    <hr class="my-5" />
    <Sorting></Sorting>
    <timeLine_joey></timeLine_joey>
    <Footer></Footer>
    <!-- <treeview></treeview> -->
    <!-- <grids></grids> -->
    <!-- <HelloWorld></HelloWorld> -->

  </div>
</template>

<script>

import Footer from './components/Footer.vue'
import timeLine_joey from './components/timeLine_joey.vue'
import card from './components/card.vue'
import Sorting from './components/Sorting.vue'
import Expansion from './components/Expansion.vue'
import hover from './components/hover.vue'
import timeview from './components/timeview.vue'
import Dcubj from './components/Dcubj.vue'
import banner from './components/banner.vue'
import iFrame2 from './components/iFrame2.vue'
import navibar from './components/navibar.vue'
import swiperVue from './components/swiperVue.vue'
// import prop from './components/prop.vue'
// import carousel from './components/carousel.vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  components: {

    Footer,
    card,
    Sorting,
    timeLine_joey,
    Expansion,
    hover,
    timeview,
    Dcubj,
    banner,
    iFrame2,
    navibar,
    swiperVue,
    // HelloWorld,
    // carousel,
    // grids,
    // prop,
  },

  data: () => ({
    //
  }),
}
</script>
