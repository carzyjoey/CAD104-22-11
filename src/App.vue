<template>

  <v-app>
    <!-- <div> <v-app>-->

    <v-app-bar app color="green" dark>
      <v-app-bar-nav-icon @click="drawer = true"> </v-app-bar-nav-icon>
      <v-toolbar-title>Joey Portfolio</v-toolbar-title>
      <router-link class="nav-link" to="/"> Home </router-link>
      __
      <router-link class="nav-link" to="/About"> About </router-link>
      __
      <!-- <router-link class="nav-link" to="/About2"> About2 </router-link> -->
      <!-- <router-link class="nav-link" to="/swiperVue"> swiperVue </router-link> -->
      <router-link class="nav-link" to="/timeCurve"> timeCurve </router-link>

      <template v-slot:append>
        <!-- <v-btn icon="mdi-heart"></v-btn> -->
        <v-btn icon="mdi-magnify"></v-btn>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>

    </v-app-bar>


    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <router-link class="nav-link" to="/">
              <v-list-item-title>Home</v-list-item-title>
            </router-link>

          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <!-- <router-link class="nav-link" to="/swiperVue">
              <v-list-item-title>swiperVue</v-list-item-title>
            </router-link> -->
            <router-link class="nav-link" to="/joeyOverview">
              <v-list-item-title>joeyOverview</v-list-item-title>
            </router-link>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- router 要放 joey -->
    <hr class="my-10" color="white" />
    <router-view />

    <!-- </div> </v-app>-->
    <Footer></Footer>
  </v-app>
</template>

<script>

import Footer from './components/Footer.vue'
export default {
  name: 'App',
  // props: {
  //   msg: String
  // }
  components: {
    Footer,
  },

  data: () => ({
    drawer: false,
    group: null,
  }),
} //export default

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
