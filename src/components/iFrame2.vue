<template>
  <div class="videobox">
    <iframe src="/3Dcarousel.html" height="500" width="1000" frameborder="0" />

    <!-- <button @click="showFrame = true">Show</button>
    <div v-html="video" v-show="showFrame"></div> -->

    <!-- <iframe src="static/word/index.html"  id="testFrame" name="myiframe" frameborder="0" width="100%" scrolling="no" style="min-height: 500px;" ></iframe> -->

  </div>

</template>

<script>
export default {
  name: 'iFrame2',
  // props: {
  //   msg: String
  // }

  // data() {
  //   return {
  //     showFrame: false,
  //     // video: '<iframe src="https://www.youtube.com/embed/qZXt1Aom3Cs" width="800" height="480" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Tr&amp;eacute;ning TEXT"></iframe>'
  //     video: '<iframe src="https://biz-setting-overview.netlify.app/1019.html" width="800" height="480" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Tr&amp;eacute;ning TEXT"></iframe>'

  //   };
  // },

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
