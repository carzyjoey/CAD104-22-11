<template>

  <div>
    <v-app>
      <v-app-bar app>
        <!-- -->
      </v-app-bar>
      <!-- 根据应用组件来调整你的内容 -->
      <v-main>
        <!-- 给应用提供合适的间距 -->
        <v-container fluid>
          <!-- 如果使用 vue-router -->
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-app>

    <swiperVue></swiperVue>
    <swiperVue></swiperVue>
    <swiperVue></swiperVue>
    <swiperVue></swiperVue>
  </div>

</template>

<script>
import swiperVue from './components/swiperVue.vue'
// import swiperVue from './swiperVue.vue'
// <swiperVue></swiperVue>

export default {
  name: 'navibar',
  // props: {
  //   msg: String
  // }
  components: {
    swiperVue,
  },
} //export default

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
