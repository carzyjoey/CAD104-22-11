<template>
  <div>
    <v-row>
      <!-- <v-col v-for="n in 14" :key="n" class="d-flex child-flex" cols="3"> -->
      <!-- <v-col v-for="(item, i) in data2.slice(1)" :key="i" class="d-flex child-flex" cols="4"> -->
      <v-col v-for="(item, i) in data2.slice(1)" :key="i" class="child-flex" cols="4">
        <!-- <v-card v-for="(item, i) in data2.slice(1)" :key="i" class="mx-auto" max-width="400"> -->
        <v-card max-width="300" >

          <!-- <v-img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover> -->
          <v-img :src="`${item[2]}`" class="align-end text-white" height="100" cover>

          <v-card-title>{{ item[3] }}</v-card-title>
          </v-img>

        </v-card>


      </v-col>
    </v-row>

  </div>
</template>

<script>

// 記得要先 import axois
import axios from "axios";
// import axios .. 這一段範例 很難找, vuetify 是有 好範例 我那一段 才進展 比較快. 
// bootstrap vue 範例 也不好. + 有一些要錢, so 好的 管道 is key. 我只能突破 一點點 & cost 3hrs up/次

export default {
  name: 'imageGrid',

  data: function () {
    return {
      data2: [] // Arr:[]
    }
  },
  setup() {
    console.log("setup");
  },
  created() {
    console.log("created");
  },
  mounted() {
    // console.log("mountedj");
    axios.
      get(
        // 'https://randomuser.me/api/?results=5'
        'https://sheets.googleapis.com/v4/spreadsheets/1EVEFyU56QLxzh4jzs4MPrRuXa3KAKkPFrZ80V6kKv9s/values/G12sopGrid?alt=json&key=AIzaSyDQJnRmuvThGNBt3Z3SLRliA4crPBg6BX0'
      )
      .then(response => { // 使用箭頭函示 this 才不會跑掉
        console.log(response);
        // this.data = response.data.results;
        // Arr.value = response.data.results;
        this.data2 = response.data.values
        // Arr.value = response.data.values;

        this.show = true
      })

  }


} //export default


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
