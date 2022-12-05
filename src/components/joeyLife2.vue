<template>
  <v-app>
    <!-- <div> <v-app>-->

    <!-- joey 元件從這裡插入 -->
    <!-- <banner></banner> -->
    
    <hr class="my-3" color="white" />
    <profileCard></profileCard>
    <hr class="my-3" color="white" />
    <iFrameSortTable></iFrameSortTable>
    <iFrameForce></iFrameForce>
    <!-- <Expansion></Expansion> -->
    <hr class="my-3" color="white" />
    <siteMap2></siteMap2>
    <hr class="my-3" color="white" />
    <swiperVue></swiperVue>
    <treeview></treeview>
    <hr class="my-3" color="white" />
    <gridsCard></gridsCard>
    <hr class="my-10" color="white" />
    <timeCurve></timeCurve>
    <hr class="my-3" color="white" />
    <imageGrid></imageGrid>

    <hr class="my-10" color="white" />
    <iFrame2></iFrame2>

    <!-- <hr class="my-3" color="white" /> -->
    <!-- <card></card> -->
    <!-- <hr class="my-3" color="white" /> -->
    <!-- <Dcubj></Dcubj> -->
    <!-- <hr class="my-3" color="white" /> -->

    <hover></hover>
    <!-- <Sorting></Sorting> -->
    <timeLine_joey></timeLine_joey>
    <hr class="my-3" color="white" />
    <!-- <Footer></Footer> -->
    <!-- </div> </v-app>-->
  </v-app>
</template>

<script>
// <profileCard></profileCard>
// <swiperVue></swiperVue>
// <hover></hover>
// <Sorting></Sorting>
// <imageGrid></imageGrid>
// <treeview></treeview>
// <iFrameSortTable></iFrameSortTable>
import siteMap2 from '../components/siteMap2.vue'
import iFrameSortTable from '../components/iFrameSortTable.vue'
import iFrameForce from '../components/iFrameForce.vue'
import imageGrid from '../components/imageGrid.vue'
import profileCard from '../components/profileCard.vue'
import swiperVue from '../components/swiperVue.vue'
// import Footer from '../components/Footer.vue'
import timeLine_joey from '../components/timeLine_joey.vue'
// import card from '../components/card.vue'
// import Sorting from '../components/Sorting.vue'
// import Expansion from '../components/Expansion.vue'
import hover from '../components/hover.vue'
// import timeview from '../components/timeview.vue'
// import Dcubj from '../components/Dcubj.vue'
// import banner from './components/banner.vue'
import iFrame2 from '../components/iFrame2.vue'
import timeCurve from '../components/timeCurve.vue'
// import Sorting from './components/Sorting.vue'
// import swiperVue from './components/swiperVue.vue'
// import swiperVue from './swiperVue.vue'

// import hover from './components/hover.vue'
// import banner from './components/banner.vue'
import gridsCard from '../components/gridsCard.vue'
import treeview from '../components/treeview.vue'

export default {
  name: 'joeyLife2',
  // props: {
  //   msg: String
  // }
  components: {
    profileCard,
    swiperVue,
    hover,
    // banner,
    // Footer,
    // card,
    // Sorting,
    timeLine_joey,
    // Expansion,
    // timeview,
    // Dcubj,
    iFrame2,
    timeCurve,
    // navibar,
    imageGrid,
    gridsCard,
    treeview,
    iFrameForce,
    iFrameSortTable,
    siteMap2,

  },
} //export default

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
