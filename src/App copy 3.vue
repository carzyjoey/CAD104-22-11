<template>
  <v-app>
    <!-- <div> <v-app>-->
    <!-- <v-app-bar :elevation="7"> -->
    <v-app-bar :clipped-left="true" :clipped-right="true">

      <!-- <v-app-bar absolute color="#fcb69f" dark shrink-on-scroll src="https://picsum.photos/1920/1080?random"
      scroll-target="#scrolling-techniques-2"> -->

      <!-- <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>Tab 1</v-tab>
          <v-tab>Tab 2</v-tab>
          <v-tab>Tab 3</v-tab>
        </v-tabs>
      </template> -->

      <template v-slot:prepend>
        <!-- <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon> -->
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
        <!-- <router-link class="nav-link" to="/"> Home </router-link> -->
        <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->
        <v-app-bar-nav-icon v-if="!permanent" @click.stop="drawer = !drawer" />

      </template>

      <!-- joey focus 關鍵字在這裡 >> @click="drawer = true"-->
      <!-- <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->


      <!-- <v-app-bar-title>Photos</v-app-bar-title> -->

      <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/"> Home </router-link>
            </li> -->

      <!-- <template v-slot:append>

        <v-btn icon="mdi-heart"></v-btn>
        <v-btn icon="mdi-magnify"></v-btn>
        <v-btn icon="mdi-dots-vertical"></v-btn>

      </template> -->

      <!-- <v-app-bar-nav-icon @click="drawer = true"> </v-app-bar-nav-icon> -->


      <!-- <v-navigation-drawer v-model="drawer" absolute clipped> -->
      <!-- <v-navigation-drawer v-model="drawer" :permanent="permanent" expand-on-hover clipped app> -->
      
      
        <v-navigation-drawer permanent>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Application
            </v-list-item-title>
            <v-list-item-subtitle>
              subtext
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>


    </v-app-bar>
    <!-- </div> </v-app>-->
  </v-app>
</template>

<script>


export default {
  name: 'App',
  // props: {
  //   msg: String
  // }
  components: {

  },

  data() {
    return {
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Photos', icon: 'mdi-image' },
        { title: 'About', icon: 'mdi-help-box' },
      ],
      right: null,
    }
  },
} //export default

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
