<template>
  <div>

    <!-- <template> -->
    <v-table fixed-header height="300px">
      <thead>
        <tr>
          <th class="text-left">
            First
          </th>
          <th class="text-left">
            2nd
          </th>
          <th class="text-left">
            3rd
          </th>
          <th class="text-left">
            fourth
          </th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr v-for="item in desserts" :key="item.name"> -->
        <tr v-for="item in desserts" :key="item[0]">
          <td>{{ item[0] }}</td>
          <td>{{ item[1] }}</td>
          <td>{{ item.third }}</td>
          <td>{{ item.fourth }}</td>
        </tr>
      </tbody>
    </v-table>
    <!-- </template> -->

  </div>

</template>

<script>

// 記得要先 import axois
import axios from "axios";
// import axios .. 這一段範例 很難找, vuetify 是有 好範例 我那一段 才進展 比較快. 
// bootstrap vue 範例 也不好. + 有一些要錢, so 好的 管道 is key. 我只能突破 一點點 & cost 3hrs up/次

export default {
  name: 'siteMap',
  // props: {
  //   msg: String
  // }
  data: function () {
    return {
      desserts: [] // data:[]
    }
  },
  // data() {
  //   return {
  //     desserts:
  //       [
  //         {
  //           "first": "漢堡抽屜",
  //           "second": "",
  //           "third": "",
  //           "fourth": ""
  //         },
  //       ]
  //   }
  // },
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
        'https://sheets.googleapis.com/v4/spreadsheets/1EVEFyU56QLxzh4jzs4MPrRuXa3KAKkPFrZ80V6kKv9s/values/siteMap?alt=json&key=AIzaSyDQJnRmuvThGNBt3Z3SLRliA4crPBg6BX0'
      )
      .then(response => { // 使用箭頭函示 this 才不會跑掉
        console.log(response);
        // this.data = response.data.results;
        // Arr.value = response.data.results;
        this.desserts = response.data.values
        // Arr.value = response.data.values;

        this.show = true
      })

  }





} //export default
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
