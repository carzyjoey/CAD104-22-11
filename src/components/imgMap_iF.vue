<template>
  <div class="videobox">
    <!-- <button @click="showFrame = true">Show</button> <div v-html="video" v-show="showFrame"></div> -->
    <!-- <iframe src="static/word/index.html"  id="testFrame" name="myiframe" frameborder="0" width="100%" scrolling="no" style="min-height: 500px;" ></iframe> -->
    
    <!-- <iframe src="/3Dcarousel.html" height="500" width="1000" frameborder="0" /> -->
    <!-- <iframe src="/imgMap.html" height="500" width="1000" frameborder="0" /> -->
    <iframe src="/1019.html" height="900" width="800" frameborder="0" />
  </div>

</template>

<script>
export default {
  name: 'imgMap-iF',
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
  /* height: 0; */
  height: 100%;
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
