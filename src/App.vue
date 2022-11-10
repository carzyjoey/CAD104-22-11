<template>
  <div>

  <!-- <v-app>
    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app> -->

    <banner></banner>

    <carousel></carousel>
    <hr class="my-5" />
    <prop></prop>
    <hr class="my-5" />
    <hover></hover>
    <hr class="my-5" />
    <Expansion></Expansion>
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
// import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/Footer.vue'
import carousel from './components/carousel.vue'
import timeLine_joey from './components/timeLine_joey.vue'
import card from './components/card.vue'
import Sorting from './components/Sorting.vue'
import Expansion from './components/Expansion.vue'
import prop from './components/prop.vue'
import hover from './components/hover.vue'
import timeview from './components/timeview.vue'
import Dcubj from './components/Dcubj.vue'
import banner from './components/banner.vue'
export default {
  name: 'App',

  components: {
    // HelloWorld,
    carousel,
    Footer,
    // grids,
    card,
    Sorting,
    timeLine_joey,
    Expansion,
    prop,
    hover,
    timeview,
    Dcubj,
    banner,
  },

  data: () => ({
    //
  }),
}
</script>
