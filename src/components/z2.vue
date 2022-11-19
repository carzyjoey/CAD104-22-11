<template>
  <v-app>
    <!-- <div> <v-app>-->

    <!-- joey 元件從這裡插入 -->
    <!-- <banner></banner> -->
    <hr class="my-3" color="white" />
    <profileCard></profileCard>
    <hr class="my-3" color="white" />
    <swiperVue></swiperVue>
    <hr class="my-3" color="white" />

    <!-- </div> </v-app>-->
  </v-app>
</template>

<script>
// <profileCard></profileCard>
// <swiperVue></swiperVue>
// <hover></hover>
// <Sorting></Sorting>


import swiperVue from '../components/swiperVue.vue'
import profileCard from '../components/profileCard.vue'

export default {
  name: 'App',
  // props: {
  //   msg: String
  // }
  components: {
    profileCard,
    swiperVue,

  },
} //export default

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
