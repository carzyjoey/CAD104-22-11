<template>
    <div>

        <li v-for="(item, i) in cards" :key="i">
            <p class="event-date">{{ item.title }}</p>
        </li>

    </div>
</template>

<script>
// 記得要先 import axois
import axios from "axios";
// import axios .. 這一段範例 很難找, vuetify 是有 好範例 我那一段 才進展 比較快. 
// bootstrap vue 範例 也不好. + 有一些要錢, so 好的 管道 is key. 我只能突破 一點點 & cost 3hrs up/次

export default {
    name: "axio",
    data: function () {
        return {
            data: []
            // Arr:[]
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
                'https://randomuser.me/api/?results=2'
            )
            .then(response => {       // 使用箭頭函示 this 才不會跑掉
                console.log(response);
                this.data = response.data.results;
                // Arr.value = response.data.results;
                // this.data = response.data.values
                // Arr.value = response.data.values;

                this.show = true
            })

    }

    // return { Arr };
} //export default


// export default {
//     name: 'axio',
//     data: function () {
//         return {
//             data: []
//         }
//     },

//     methods: {
//         mounted: function () {
//             axios.
//                 get(
//                     'https://randomuser.me/api/?results=2'
//                 )
//                 .then(response => {       // 使用箭頭函示 this 才不會跑掉
//                     console.log(response);
//                     // this.data = response.data.results
//                     this.data = response.data.values
//                     // Arr.value = response.data.values;
//                     this.show = true
//                 })
//             // return { this };
//         }

//     },
// };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
