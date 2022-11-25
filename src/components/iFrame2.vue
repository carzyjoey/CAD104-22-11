<template>
  <div class="videobox">
    <iframe src="/3Dcarousel.html" height="500" width="1000" frameborder="0" />
  </div>
</template>

<script>
export default {
  name: 'iFrame2',
  // props: {
  //   msg: String
  // }


} //export default
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.videobox {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
}

.videobox iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
