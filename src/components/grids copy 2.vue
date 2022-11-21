<template>
  <div>

    <v-container class="grey lighten-5">
      <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
      <v-row>

        <!-- <v-col cols="6" md="3"> -->
        <v-col cols="6" md="3" v-for="item in messages" :key="item.id">
          <!-- .col-6 .col-md-4 -->
          <!-- <v-card title="Card title" subtitle="Subtitle" text="..." variant="outlined"></v-card> -->

          <!-- <v-timeline-item v-for="item in items" :key="item.id"> -->
          <v-card class="mx-auto" max-width="344">
            <!-- <v-card class="mx-auto" max-width="344" v-for="item in messages" :key="item.id"> -->
            <!-- <v-card class="mx-auto" max-width="344"> -->


            <!-- <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img> -->
            <!-- <v-img src="@/assets/img/joey.png" height="200px" cover></v-img> -->

            <!-- <v-img :src="require('item.time')" height="200px" cover></v-img> -->
            <!-- <v-img :src="require('item.time')" aspect-ratio="1"></v-img> -->
            <!-- <v-img :src="require(item.time)" /> -->
            <v-img :src="require(`../assets/img/${item.time}`)" height="150px" cover></v-img>

            <v-card-title>Top western road trips</v-card-title>
            <!-- <v-card-subtitle>1,000 miles of wonder</v-card-subtitle> -->
            <v-card-subtitle>{{ item.time }}</v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange-lighten-2" variant="text">Explore</v-btn>
              <v-spacer></v-spacer>
              <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  I'm a thing. But,
                </v-card-text>
              </div>
            </v-expand-transition>



          </v-card>
        </v-col>
      </v-row>

    </v-container>

  </div>
</template>


<script>
export default {
  name: 'grids',
  // data: () => ({
  //   cards: [
  //     { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
  //     { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
  //     { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
  //   ],
  // }),
  data: () => ({
    show: false,
    messages: [
      {
        from: '@/assets/img/joey.png',
        message: `Sure, I'll see you later.`,
        time: 'joey.png',
        color: 'deep-purple-lighten-1',
      },
      {
        from: 'John Doe',
        message: 'https://picsum.photos/200/300?random=2',
        time: 'workplace.jpg',
        color: 'green',
      },
      // {
      //   from: 'You',
      //   message: 'Did you still want to grab lunch today?',
      //   time: '9:47am',
      //   color: 'deep-purple-lighten-1',
      // },
      // {
      //   from: 'You',
      //   message: 'Did you still want to grab lunch today?',
      //   time: '9:47am',
      //   color: 'deep-purple-lighten-1',
      // },
      // {
      //   from: 'You',
      //   message: 'Did you still want to grab lunch today?',
      //   time: '9:47am',
      //   color: 'deep-purple-lighten-1',
      // },
    ],

  }),
} //export default
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
