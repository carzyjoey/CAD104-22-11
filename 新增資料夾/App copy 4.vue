<template>

  <!-- <div> <v-app>-->
  <v-app>
    <v-app-bar app color="primary" dark inverted-scroll>
      <v-app-bar-nav-icon> </v-app-bar-nav-icon>
      <v-app-bar-title>Coding Beauty</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
      </v-menu>
    </v-app-bar>
    <hr class="my-10" />
    <hover></hover>
    <hr class="my-5" color="white"/>
    <swiperVue></swiperVue>
    <hr class="my-10" />
    <swiperVue></swiperVue>
    <hr class="my-10" />
    <swiperVue></swiperVue>
    <hr class="my-10" />
    <swiperVue></swiperVue>
    <v-sheet>
      <v-container style="height: 1000px"> </v-container>
    </v-sheet>
    <hover></hover>


  </v-app>
  <!-- </div> </v-app>-->

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
