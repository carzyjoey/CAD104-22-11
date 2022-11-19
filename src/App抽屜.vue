<template>
  <v-app>
    <!-- <div> <v-app>-->

    <v-app-bar app color="green" dark>
      <v-app-bar-nav-icon @click="drawer = true"> </v-app-bar-nav-icon>
      <v-toolbar-title>Coding Beauty</v-toolbar-title>
    </v-app-bar>


    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

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

  data: () => ({
    drawer: false,
    group: null,
  }),
} //export default

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
