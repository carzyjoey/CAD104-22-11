<template>
  <div>
    <!-- <img class="img-fluid" alt="Vue logo" src="../assets/logo.png" /> -->
    <h1 class="display-1 text-bold"> Home -- My App </h1>
  
    <h1 class="text-gray-soft text-regular"> Greetings to you all. </h1>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "home",
  components: {
    HelloWorld,
  },
};
</script>

<style>

</style>