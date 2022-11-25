<template>
  <div>

    <div class="background">
      <div class="transbox">
        <p>这段文本被放置在一个透明框中。</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'imageTr',
  // props: {
  //   msg: String
  // }
} //export default
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.background {
  /* background: url(/i/photo/tulip_peach_blossom_s.jpg) repeat; */
  background: url(https://picsum.photos/536/354) repeat;
  border: 2px solid black;
}

div.transbox {
  margin: 30px;
  background-color: #ffffff;
  border: 1px solid black;
  opacity: 0.3;
  animation: taadaa 8s infinite;
}

div.transbox p {
  margin: 5%;
  font-weight: bold;
  color: #000000;
}

@keyframes taadaa {
  0% {
    opacity: 0.2;
  }

  20% {
    opacity: 0.4;
    /* background: rgba(213, 34, 160, .2); */
  }

  40% {
    opacity: 0.6;
  }

  60% {
    opacity: 0.5;
  }

  80% {
    opacity: 0.4;
  }

  100% {
    opacity: 0.2;
  }
}
</style>
