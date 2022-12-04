<template>

  <v-app>
    <!-- <div> <v-app>-->

    <!-- <v-card> -->
    <!-- <v-layout> -->
    <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

    <v-app-bar color="primary" prominent>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Joey Portfolio</v-toolbar-title>

      <v-spacer></v-spacer>
      <router-link class="nav-link" to="/"> Home </router-link>
      __
      <router-link class="nav-link" to="/About"> About </router-link>
      __
      <router-link class="nav-link" to="/testNavi"> testNavi </router-link>

      <v-btn variant="text" icon="mdi-magnify"></v-btn>
      <v-btn variant="text" icon="mdi-filter"></v-btn>
      <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>

    </v-app-bar>


    <!-- <v-navigation-drawer v-model="drawer" location="bottom" temporary> -->
    <v-navigation-drawer v-model="drawer" location="top" temporary>
      <v-list :items="items"></v-list>
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
            <router-link class="nav-link" to="/joeyOverview">
              <v-list-item-title>joeyOverview</v-list-item-title>
            </router-link>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <router-link class="nav-link" to="/joeyLife2">
              <v-list-item-title>joeyLife2</v-list-item-title>
            </router-link>
          </v-list-item>

        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>

    <v-main>
      <v-card-text>
        <!-- The navigation drawer will appear from the bottom on smaller size screens. -->
      </v-card-text>
    </v-main>

    <!-- </v-layout> -->
    <!-- </v-card> -->

    <!-- router 要放 joey -->
    <!-- <hr class="my-10" color="white" /> -->
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
    items: [
      {
        title: 'Foo',
        value: 'foo',
      },
    ],
  }),

  watch: {
    group() {
      this.drawer = false
    },
  },


} //export default

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
