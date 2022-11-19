<template>

  <div class="container">
    <router-link class="nav-link" to="/"> Home </router-link>
    <hr class="my-3" color="white" />
    <router-link class="nav-link" to="/About"> About </router-link>
    <hr class="my-3" color="white" />
    <router-view />
  </div>

</template>

<script>

// import Home from "./components/Home.vue";
export default {
  name: 'App',
  // props: { msg: String }

  components: {
    // Home,
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
