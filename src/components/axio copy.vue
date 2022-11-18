<template>
    <div>

        <div id="app">
            {{ data }}
        </div>

    </div>
</template>

<script>
export default {
    name: 'axio',
    data: function () {
        return {
            data: []
        }
    },
    methods: {},
    mounted: function () {
        // const axios = require('axios');
        axios.
            get(
                'https://randomuser.me/api/?results=2'
            )
            .then(response => {       // 使用箭頭函示 this 才不會跑掉
                console.log(response);
                // this.data = response.data.results
                this.data = response.data.values
                // Arr.value = response.data.values;
                this.show = true
            })
        // return { Arr };


    }

    // data: () => ({
    //     cards:
    //         [
    //             {
    //                 "iterm :": 1,
    //                 "title": "joeyChart",
    //                 "說明 :": "Timeline of HTML & joey 會做的 Chart"
    //             },
    //         ]

    // }),
    // props: {
    //   msg: String
    // }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
