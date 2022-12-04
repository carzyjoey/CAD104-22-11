<template>
  <v-table fixed-header height="300px">
    <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Calories
        </th>
      </tr>
    </thead>
    <tbody>
      <!-- <tr v-for="item in desserts" :key="item.name"> -->
      <tr v-for="(item, i) in data.slice(1)" :key="i">
        <td>{{ item[1] }}</td>
        <td>{{ item[2] }}</td>
      </tr>
    </tbody>
  </v-table>
</template>


<script>
// 記得要先 import axois
import axios from "axios";
// import axios .. 這一段範例 很難找, vuetify 是有 好範例 我那一段 才進展 比較快. 
// bootstrap vue 範例 也不好. + 有一些要錢, so 好的 管道 is key. 我只能突破 一點點 & cost 3hrs up/次

export default {
  name: 'Sorting',


  data: function () {
    return {
      data: [] // Arr:[]
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
        'https://sheets.googleapis.com/v4/spreadsheets/1EVEFyU56QLxzh4jzs4MPrRuXa3KAKkPFrZ80V6kKv9s/values/CAD104vue?alt=json&key=AIzaSyDQJnRmuvThGNBt3Z3SLRliA4crPBg6BX0'
      )
      .then(response => { // 使用箭頭函示 this 才不會跑掉
        console.log(response);
        // this.data = response.data.results;
        // Arr.value = response.data.results;
        this.data = response.data.values
        // Arr.value = response.data.values;

        this.show = true
      })

  }

  // data () {
  //   return {
  //     desserts: [
  //       {
  //         name: 'Frozen Yogurt',
  //         calories: 159,
  //       },
  //       {
  //         name: 'Ice cream sandwich',
  //         calories: 237,
  //       },
  //       {
  //         name: 'Eclair',
  //         calories: 262,
  //       },
  //     ],
  //   }
  // },


} //export default
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
