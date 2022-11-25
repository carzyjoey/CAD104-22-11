<template>
  <div>
    
    <v-card class="mx-auto" max-width="448">
      <v-layout>
        <v-app-bar color="primary" density="compact">
          <template v-slot:prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </template>

          <v-app-bar-title>Photos</v-app-bar-title>

          <template v-slot:append>
            <v-btn icon="mdi-dots-vertical"></v-btn>
          </template>
        </v-app-bar>

        <v-main>
          <v-container fluid>
            <v-row dense>
              <v-col v-for="n in 8" :key="n" cols="3">
                <v-sheet color="grey-lighten-2" height="96"></v-sheet>
              </v-col>
            </v-row>
          </v-container>
        </v-main>
      </v-layout>
    </v-card>

    <v-treeview :items="items"></v-treeview>
  </div>
</template>

<script>
export default {
  name: 'treeview',
  // https://vuetifyjs.com/

  data: () => ({
    items: [
      {
        id: 1,
        name: 'Applications :',
        children: [
          { id: 2, name: 'Calendar : app' },
          { id: 3, name: 'Chrome : app' },
          { id: 4, name: 'Webstorm : app' },
        ],
      },
      {
        id: 5,
        name: 'Documents :',
        children: [
          {
            id: 6,
            name: 'vuetify :',
            children: [
              {
                id: 7,
                name: 'src :',
                children: [
                  { id: 8, name: 'index : ts' },
                  { id: 9, name: 'bootstrap : ts' },
                ],
              },
            ],
          },
          {
            id: 10,
            name: 'material2 :',
            children: [
              {
                id: 11,
                name: 'src :',
                children: [
                  { id: 12, name: 'v-btn : ts' },
                  { id: 13, name: 'v-card : ts' },
                  { id: 14, name: 'v-window : ts' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 15,
        name: 'Downloads :',
        children: [
          { id: 16, name: 'October : pdf' },
          { id: 17, name: 'November : pdf' },
          { id: 18, name: 'Tutorial : html' },
        ],
      },
      {
        id: 19,
        name: 'Videos :',
        children: [
          {
            id: 20,
            name: 'Tutorials :',
            children: [
              { id: 21, name: 'Basic layouts : mp4' },
              { id: 22, name: 'Advanced techniques : mp4' },
              { id: 23, name: 'All about app : dir' },
            ],
          },
          { id: 24, name: 'Intro : mov' },
          { id: 25, name: 'Conference introduction : avi' },
        ],
      },
    ],
  }),

} // export default
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
