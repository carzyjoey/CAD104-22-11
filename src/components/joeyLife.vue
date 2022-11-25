<template>
  <v-app>
    <!-- <div> <v-app>-->

    <!-- joey 元件從這裡插入 -->

    <hr class="my-3" color="white" />
    <profileCard></profileCard>
    <hr class="my-3" color="white" />
    <Expansion></Expansion>
    <hr class="my-3" color="white" />

  </v-app>
</template>

<script>
// <profileCard></profileCard>
// <swiperVue></swiperVue>
// <hover></hover>
// <Sorting></Sorting>
// <imageGrid></imageGrid>
// <treeview></treeview>
// <iFrame_force></iFrame_force>


import profileCard from '../components/profileCard.vue'
import Expansion from '../components/Expansion.vue'



export default {
  name: 'App',
  // props: {
  //   msg: String
  // }
  components: {
    profileCard,
    Expansion,

 

  },
} //export default

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
