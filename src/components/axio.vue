<template>
    <div>
        <ol>
            <li v-for="(item, i) in data" :key="i">
                <!-- <p class="event-date">{{ item.name }}</p> -->
                <p class="event-date">{{ item[1] }}</p>
                <p class="event-description">"ISO HTML", based on HTML 4.01 Strict was published as an ISO/IEC
                    international standard.</p>
            </li>
        </ol>

    </div>
</template>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
:root {
    font-family: sans-serif;
}

ol {
    margin: 0;
    list-style: none;
    padding: 0;
    --hue: 1;
    --unit: 1rem;
}

h1 {
    text-align: center;
}

p {
    line-height: 1.3;
}

.event-date {
    margin: 0 0 0.25rem;
    font-weight: bold;
}

.event-description {
    margin: 0;
}

li {
    --height: 7rem;
    position: relative;
    display: block;
    background-color: hsl(calc(var(--hue)*360/20), 90%, 65%);
    border-color: hsl(calc(var(--hue)*360/20), 90%, 65%);
    padding: 1rem;
    margin: 2rem 0;
}

li::before {
    content: "";
    background-color: inherit;
    position: absolute;
    display: block;
    width: var(--unit);
    height: var(--unit);
    top: 100%;
    left: calc(50% - (var(--unit)/2));
}

li::after {
    content: "";
    position: absolute;
    display: block;
    top: calc(100% + var(--unit));
    left: calc(50% - (var(--unit)));
    border: var(--unit) solid transparent;
    border-top-color: inherit;
}

li:last-child::before,
li:last-child::after {
    content: none;
}

li:nth-child(20n+1) {
    --hue: 1;
}

li:nth-child(20n+2) {
    --hue: 2;
}

li:nth-child(20n+3) {
    --hue: 3;
}

li:nth-child(20n+4) {
    --hue: 4;
}

li:nth-child(20n+5) {
    --hue: 5;
}

li:nth-child(20n+6) {
    --hue: 6;
}

li:nth-child(20n+7) {
    --hue: 7;
}

li:nth-child(20n+8) {
    --hue: 8;
}

li:nth-child(20n+9) {
    --hue: 9;
}

li:nth-child(20n+10) {
    --hue: 10;
}

li:nth-child(20n+11) {
    --hue: 11;
}

li:nth-child(20n+12) {
    --hue: 12;
}

li:nth-child(20n+13) {
    --hue: 13;
}

li:nth-child(20n+14) {
    --hue: 14;
}

li:nth-child(20n+15) {
    --hue: 15;
}

li:nth-child(20n+16) {
    --hue: 16;
}

li:nth-child(20n+17) {
    --hue: 17;
}

li:nth-child(20n+18) {
    --hue: 18;
}

li:nth-child(20n+19) {
    --hue: 19;
}

li:nth-child(20n+20) {
    --hue: 20;
}

@media (min-width: 550px) and (max-width: 899px) {
    li {
        margin: 1rem;
        width: calc(50% - 4rem);
        float: left;
        min-height: var(--height);
    }

    li:nth-child(4n+3),
    li:nth-child(4n+4) {
        float: right;
    }

    li:nth-child(4n+1)::before {
        top: calc(var(--height)/2 + var(--unit)/2);
        left: 100%;
    }

    li:nth-child(4n+1)::after {
        top: calc(var(--height)/2);
        left: calc(100% + (var(--unit)));
        border: var(--unit) solid transparent;
        border-left-color: inherit;
    }

    li:nth-child(4n+3)::before {
        top: calc(var(--height)/2 + var(--unit)/2);
        left: -1rem;
    }

    li:nth-child(4n+3)::after {
        top: calc(var(--height)/2);
        left: -3rem;
        border: var(--unit) solid transparent;
        border-right-color: inherit;
    }
}

@media (min-width: 900px) and (max-width: 1199px) {
    li {
        margin: 1rem;
        width: calc(33.33% - 4rem);
        float: left;
        min-height: 7rem;
    }

    li:nth-child(6n+4),
    li:nth-child(6n+5),
    li:nth-child(6n+6) {
        float: right;
    }

    li:nth-child(6n+1)::before,
    li:nth-child(6n+2)::before {
        top: calc(var(--height)/2 + var(--unit)/2);
        left: 100%;
    }

    li:nth-child(6n+1)::after,
    li:nth-child(6n+2)::after {
        top: 3.5rem;
        left: calc(100% + (var(--unit)));
        border: var(--unit) solid transparent;
        border-left-color: inherit;
    }

    li:nth-child(6n+4)::before,
    li:nth-child(6n+5)::before {
        top: calc(var(--height)/2 + var(--unit)/2);
        left: -1rem;
    }

    li:nth-child(6n+4)::after,
    li:nth-child(6n+5)::after {
        top: calc(var(--height)/2);
        left: -3rem;
        border: var(--unit) solid transparent;
        border-right-color: inherit;
    }
}

@media (min-width: 1200px) {
    ol {
        max-width: 1600px;
        margin: 0 auto;
    }

    li {
        margin: 1rem;
        width: calc(25% - 4rem);
        float: left;
        min-height: 7rem;
    }

    li:nth-child(8n+5),
    li:nth-child(8n+6),
    li:nth-child(8n+7),
    li:nth-child(8n+8) {
        float: right;
    }

    li:nth-child(8n+1)::before,
    li:nth-child(8n+2)::before,
    li:nth-child(8n+3)::before {
        top: calc(var(--height)/2 + var(--unit)/2);
        left: 100%;
    }

    li:nth-child(8n+1)::after,
    li:nth-child(8n+2)::after,
    li:nth-child(8n+3)::after {
        top: calc(var(--height)/2);
        left: calc(100% + (var(--unit)));
        border: var(--unit) solid transparent;
        border-left-color: inherit;
    }

    li:nth-child(8n+5)::before,
    li:nth-child(8n+6)::before,
    li:nth-child(8n+7)::before {
        top: calc(var(--height)/2 + var(--unit)/2);
        left: -1rem;
    }

    li:nth-child(8n+5)::after,
    li:nth-child(8n+6)::after,
    li:nth-child(8n+7)::after {
        top: calc(var(--height)/2);
        left: -3rem;
        border: var(--unit) solid transparent;
        border-right-color: inherit;
    }
}
</style>

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
                // 'https://randomuser.me/api/?results=5'
                'https://sheets.googleapis.com/v4/spreadsheets/1EVEFyU56QLxzh4jzs4MPrRuXa3KAKkPFrZ80V6kKv9s/values/CAD104vue?alt=json&key=AIzaSyDQJnRmuvThGNBt3Z3SLRliA4crPBg6BX0'
            )
            .then(response => {       // 使用箭頭函示 this 才不會跑掉
                console.log(response);
                // this.data = response.data.results;
                // Arr.value = response.data.results;
                this.data = response.data.values
                // Arr.value = response.data.values;

                this.show = true
            })

    }

} //export default

</script>
