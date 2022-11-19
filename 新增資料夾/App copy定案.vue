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
            <v-card-text>
              The navigation drawer will appear from the bottom on smaller size screens.
            </v-card-text>
          </v-main>
        </v-layout>
      </v-card>
      <swiperVue></swiperVue>
      <hover></hover>
      <swiperVue></swiperVue>
      <swiperVue></swiperVue>
      <swiperVue></swiperVue>
      <swiperVue></swiperVue>
      <swiperVue></swiperVue>
    <!-- </div> </v-app>-->
  </v-app>
</template>

<script>
import swiperVue from './components/swiperVue.vue'
// import swiperVue from './swiperVue.vue'
// <swiperVue></swiperVue>
// <hover></hover>
import hover from './components/hover.vue'

export default {
  name: 'navibar',
  // props: {
  //   msg: String
  // }
  components: {
    swiperVue,
    hover,
  },
} //export default

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
