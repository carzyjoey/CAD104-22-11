<template>
  <div>

    <v-card>
      <v-layout>
        <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

        <!-- <v-app-bar color="primary" prominent> -->
        <v-app-bar color="black" prominent>
          <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

          <v-toolbar-title>joey portifolio</v-toolbar-title>

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
            <!-- The navigation drawer will appear from the bottom on smaller size screens. -->
          </v-card-text>
        </v-main>
      </v-layout>
    </v-card>

  </div>

</template>

<script>
export default {
  name: 'navibar',
  // props: {
  //   msg: String
  // }
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: 'Foo',
        value: 'foo',
      },
      {
        title: 'Bar',
        value: 'bar',
      },
      {
        title: 'Fizz',
        value: 'fizz',
      },
      {
        title: 'Buzz',
        value: 'buzz',
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
