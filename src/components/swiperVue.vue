<template>
  <div>

    <swiper :slidesPerView="3" :spaceBetween="30" :slidesPerGroup="3" :loop="true" :loopFillGroupWithBlank="true"
      :pagination="{
        clickable: true,
      }" :navigation="true" :modules="modules" class="mySwiper">
      <swiper-slide><img src="
        https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjSQEYOnd1DW7h0lTsBoVp8pfM7IVMGjE3ObVYBimTsMc6GFRybP5fr_SeoO5MR4iME_n7lOqyxt_1tYExrvVwYvNYfs2IKw2NeJalpb0VSunsB-GmlXCq3z_mNeWxvISUTU74Is6cg9WZkEhP2XVO1nljlsPwvoGLeUGGOQAX21Nxeo2V7FkZYktJ_uQ/w400-h230/curveLCD2D.png        
        " />
      </swiper-slide>
      <swiper-slide><img src="
        https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBqRPLyARGhSVAttcFZ5GmoVnZdtLRbuP2PhSfnxcH1z5qp_v96kSGYpCH4tDAyVIlRXLm2KIEexceoE8sAHB-QJSFnvCRQy6FFTgAmCaZ02iKwm2OrDAyh7EQ0POuU3NYKiwCNZmROGWa1V_Pvy5wOfATpIDvIqGT2fC4oaO3nkV7NB3d_liD_YPq6g/w400-h247/curveLCD.png        
        " />
      </swiper-slide>
      <swiper-slide><img src="
        https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUbz3SEVEQdKSyIh7l4Va9EUEdY5-gAAOT83ChpYmyDNr8aptohjYKqSHVFmQNZabIX7n1VNZVpjely6R4GpwGe21AZuzb3z7t9AjV6MQ6ndDARntR8MEewxYN1QrapAlbCYHxTgYVYgDXgfXs-BKu-HYYDVA8oIjsz5An4HHLr2kIMpG5PTn4JN-MZw/w400-h194/DFMEA.jpg        
       " />
      </swiper-slide>
      <swiper-slide><img src="
        https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiy5htlpl7t2ewJpqk-3E_TknWpqufoQcDS5i67niudfZQiDDkzjglQVB3W8eOr_P3SS-qGMOT5ec8sOR1PbFId2WozvuqxNNIkABUNQcOqbhp0zPPKpSytaMc8xuqTbosh2STggbKKKNn21flAPujp_XZ90QHanc9R6m3QMuK_Dd11MdxrxzdkEaW9pg/w400-h233/G1200CAD.png      
        " />
      </swiper-slide>
      <swiper-slide><img src="
        https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5kYT-cNAq0Q0JzSs1Mq0_jJhRwY1HQe48oSzU9q7xnptyc5HRDBLcw1BYgYb56y1MM2Na2Rxu2SqgjuqlU4VGdyqQhrQ1J3uSO440tA9lid8bxLK7QNV5afKr0lKUDMg4hXxBRP9Dl-KAc0PvbKkHV6rqTnPGeTRfcX5prtZeTYe1uJQXWGqcWGvLdg/w400-h358/G1200light.png       
       " />
      </swiper-slide>
      <swiper-slide><img src="
        https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivyjlZcfQnZG637e_rJGbgtOHfwtmombutY0HA124peeDQ7AP1Mn5QcGkzZDbEptpnD5JM2d9wWi1w5dGNYJX7XCwTipjEzo9t7IXLZ62ob6uz0KGkkBorQ_xNiCf63XgeJVXCg6SI_9TLmV27BU4Y5LagJTRVgj2Lwn91by9x845DSxSep3iFRmP8Fg/w640-h328/20221108002.png        
      " /></swiper-slide>

      <swiper-slide><img src="
          https://1.bp.blogspot.com/-87mrsozsWgQ/X7vQgoqlWsI/AAAAAAABVns/UfPlHFTOUVElD-gG916wk8y-TtihTF6-ACLcBGAsYHQ/s320/Image20201123003.png      
      " /></swiper-slide>



    </swiper>

  </div>

</template>

<script>

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./style.css";

// import required modules
import { Pagination, Navigation } from "swiper";


export default {
  name: 'swiperVue',
  // props: {
  //   msg: String
  // }
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
} //export default


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app {
  height: 100%
}

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
</style>
