<template>
  <div>

    <v-img :src="require('@/assets/joey.png')" aspect-ratio="2.75" ></v-img>

    <!-- <img src="require('../assets/joey.png')" alt="Italian Trulli jj"> -->
    <!-- <img require("@/assets/joey.png") alt="Italian Trulli jj"> -->
    
    <h2>Image Maps</h2>
    <p>Click on the computer, the phone, or the cup of coffee to go to a new page and read more about the topic:</p>

    <!-- <img src="workplace.jpg" alt="Workplace" usemap="#workmap" width="400" height="379"> -->
    <!-- <img src="../assets/workplace.jpg" alt="Workplace" usemap="#workmap" width="400" height="379"> -->
    <img src="require('@/assets/workplace.jpg')" alt="Workplace" usemap="#workmap" width="400" height="379>

    <map name="workmap">
      <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
      <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
      <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="coffee.htm">
    </map>

  </div>

</template>

<script>
export default {
  name: 'Footer',
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
