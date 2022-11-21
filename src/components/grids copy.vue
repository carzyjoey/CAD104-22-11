<template>
  <div>

    <!-- <v-container class="bg-surface-variant bg-purple-darken-2"> -->
    <v-container class="bg-purple-darken-2">
      <v-row>

        <v-col md="4">
          <v-sheet class="pa-2 ma-2">
            <!-- .v-col-md-4? -->
            <v-card title="Card title" subtitle="Subtitle" text="..." variant="outlined"></v-card>
          </v-sheet>
        </v-col>

        <v-col md="4" class="ml-auto">
          <v-sheet class="pa-2 ma-2">
            <!-- .v-col-md-4 .ml-auto -->
            <v-card title="Card title" subtitle="Subtitle" text="..." variant="outlined"></v-card>
          </v-sheet>
        </v-col>

        <v-col md="4" class="ml-auto">
          <v-sheet class="pa-2 ma-2">
            <!-- .v-col-md-4 .ml-auto -->
            <v-card title="Card title" subtitle="Subtitle" text="..." variant="outlined"></v-card>
          </v-sheet>
        </v-col>

      </v-row>



      <v-row>


        <v-col md="4" class="ml-md-auto">
          <v-sheet class="pa-2 ma-2">
            .v-col-md-4 .ml-md-auto
          </v-sheet>
        </v-col>

        <v-col md="4" class="ml-md-auto">
          <v-sheet class="pa-2 ma-2">
            .v-col-md-4 .ml-md-auto
          </v-sheet>
        </v-col>

        <v-col md="4" class="ml-md-auto">
          <v-sheet class="pa-2 ma-2">
            .v-col-md-4 .ml-md-auto
          </v-sheet>
        </v-col>


      </v-row>

      <!-- <v-row>
        <v-col cols="auto" class="mr-auto">
          <v-sheet class="pa-2 ma-2">
            .v-col-auto .mr-auto
          </v-sheet>
        </v-col>
        <v-col cols="auto">
          <v-sheet class="pa-2 ma-2">
            .v-col-auto
          </v-sheet>
        </v-col>
      </v-row> -->
    </v-container>

  </div>
</template>


<script>
export default {
  name: 'grids',
  data: () => ({
    cards: [
      { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
      { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
      { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
    ],
  }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
