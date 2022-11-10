<template>
  <div>
    <div class="rotating-box">
      <div class="single-rb">
        <div class="front-side"><img alt="" src="https://i.postimg.cc/C1203ZrV/aaa.jpg"></div>
        <div class="back-side"><img alt="" src="https://i.postimg.cc/C1203ZrV/aaa.jpg"></div>
        <div class="left-side"><img alt="" src="https://i.postimg.cc/C1203ZrV/aaa.jpg"></div>
        <div class="right-side"><img alt="" src="https://i.postimg.cc/C1203ZrV/aaa.jpg"></div>
        <div class="top-side"><img alt="" src="https://i.postimg.cc/C1203ZrV/aaa.jpg"></div>
        <div class="bottom-side"><img alt="" src="https://i.postimg.cc/C1203ZrV/aaa.jpg"></div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Dcubj',

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  background: darkslategray;
}

.rotating-box {
  width: 400px;
  height: 400px;
  margin: 10px auto;
  perspective: 800px;
}

.single-rb {
  width: 400px;
  height: 400px;
  animation: rotate 15s linear infinite;
  transform-style: preserve-3d;
  margin-top: 120px;
}

.single-rb img {
  height: 400px;
  width: 400px;
}

.single-rb div {
  position: absolute;
  width: 400px;
  height: 400px;
}

.front-side {
  transform: translateZ(200px);
}

.back-side {
  transform: rotateY(180deg) translateZ(200px);
}

.left-side {
  transform: rotateY(-90deg) translateX(-200px);
  transform-origin: left;
}

.right-side {
  transform: rotateY(90deg) translateX(200px);
  transform-origin: right;
}

.top-side {
  transform: rotateX(-90deg) translateY(-200px);
  transform-origin: top;
}

.bottom-side {
  transform: rotateX(90deg) translateY(200px);
  transform-origin: bottom;
}

@keyframes rotate {
  0% {
    transform: rotateY(0deg);
  }

  100% {
    transform: rotateY(360deg);
  }
}
</style>