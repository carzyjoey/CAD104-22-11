<template>
  <v-app>
    <!-- <div> <v-app>-->

    <v-card>
      <v-layout>
        <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

        <v-app-bar color="primary" prominent>
          <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

          <v-toolbar-title>My files</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn variant="text" icon="mdi-magnify"></v-btn>

          <v-btn variant="text" icon="mdi-filter"></v-btn>

          <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" location="bottom" temporary>
          <v-list :items="items"></v-list>
        </v-navigation-drawer>

        <v-main>
          <!-- <v-card-text>
              The navigation drawer will appear from the bottom on smaller size screens.
            </v-card-text> -->
        </v-main>
      </v-layout>
    </v-card>

    <!-- joey 元件從這裡插入 -->
    <!-- <banner></banner> -->
    <hr class="my-3" color="white" />
    <profileCard></profileCard>
    <hr class="my-3" color="white" />
    <swiperVue></swiperVue>
    <hr class="my-3" color="white" />
    <Expansion></Expansion>
    <hr class="my-3" color="white" />
    <hover></hover>
    <hr class="my-3" color="white" />
    <iFrame2></iFrame2>

    <hr class="my-3" color="white" />
    <card></card>
    <hr class="my-3" color="white" />
    <Dcubj></Dcubj>
    <hr class="my-3" color="white" />

    <hr class="my-3" color="white" />
    <!-- <Sorting></Sorting> -->
    <timeLine_joey></timeLine_joey>
    <hr class="my-3" color="white" />
    <Footer></Footer>
    <!-- </div> </v-app>-->
  </v-app>
</template>

<script>
// <profileCard></profileCard>
// <swiperVue></swiperVue>
// <hover></hover>
// <Sorting></Sorting>


import swiperVue from './components/swiperVue.vue'
import Footer from './components/Footer.vue'
import timeLine_joey from './components/timeLine_joey.vue'
import card from './components/card.vue'
// import Sorting from './components/Sorting.vue'
import Expansion from './components/Expansion.vue'
import hover from './components/hover.vue'
// import timeview from './components/timeview.vue'
import Dcubj from './components/Dcubj.vue'
// import banner from './components/banner.vue'
import iFrame2 from './components/iFrame2.vue'
// import Sorting from './components/Sorting.vue'
// import swiperVue from './components/swiperVue.vue'
// import swiperVue from './swiperVue.vue'

// import hover from './components/hover.vue'
// import banner from './components/banner.vue'
import profileCard from './components/profileCard.vue'

export default {
  name: 'App',
  // props: {
  //   msg: String
  // }
  components: {
    profileCard,
    swiperVue,
    hover,
    // banner,
    Footer,
    card,
    // Sorting,
    timeLine_joey,
    Expansion,
    // timeview,
    Dcubj,
    iFrame2,
    // navibar,

  },
} //export default

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
