<template>
  <div>

    <div id="app">
      <div class="swiper-container mySwiper">
        <div class="swiper-wrapper">
          <!-- joey o -->
          <!-- <div class="swiper-slide" v-for="item in imgArr" :key="item.src"> -->
          <!-- <img :src="item.src" alt=""> -->
          <!-- joey GDS -->
          <div class="swiper-slide" v-for="item in imgArr">
            <img :src="item[0]" alt="">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>

  </div>

</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* #app { */
/* width: 400px; */
/* height: 300px; */
/* } */
</style>

<!-- ---------------------------------------- -->

<script>

const { ref, onMounted, watch, nextTick } = Vue;
export default {
  name: 'swiper',
  // props: {
  //   msg: String }

  setup() {
    const imgArr = ref([]); //綁定imgArr變數 到vue
    // 處理異步問題
    let swiper = null
    // 監聽資料更新
    watch(imgArr, (newVal) => {
      // 確保v-for的dom跑完才做更新
      nextTick(() => {
        swiper.update()
      })
    })
    // 只會渲染第一次
    onMounted(() => {       //onMounted 裡面接一個 callback, 讓js準確的時機再做用到DOM
      axios
        .get(
          // "https://run.mocky.io/v3/fe4354a8-0cfb-4de0-9a39-8a2504f996cf" //joey o
          // 'data2.json'
          // 'https://run.mocky.io/v3/fe4354a8-0cfb-4de0-9a39-8a2504f996cf'
          'https://sheets.googleapis.com/v4/spreadsheets/1EVEFyU56QLxzh4jzs4MPrRuXa3KAKkPFrZ80V6kKv9s/values/picLinktest?alt=json&key=AIzaSyDQJnRmuvThGNBt3Z3SLRliA4crPBg6BX0'
          //joey GDS
        )
        .then((res) => {
          console.log(res);
          // imgArr.value = res.data;        //joey o
          imgArr.value = res.data.values; //joey GDS
          console.log(imgArr.value);
        });
      swiper = new Swiper(".swiper-container", {
        pagination: {
          el: ".swiper-pagination",
        },
      });
    });
    return { imgArr };
  },
}
</script>


