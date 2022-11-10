<template>
  <div id="box1">
    <hr />
    <button type="button" @click="fillGreen()">填充绿色</button>
    <button type="button" @click="fillBlue()">填充蓝色</button>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#box1 {
  height: 300px;
  width: 300px;
  background-color: aquamarine;
}
</style>


<!-- https://blog.csdn.net/ashtyukjhf/article/details/121725725 -->
<script>
export default {
  name: 'Footer',
  data() {
    return {
      boxStyle: {},
    };
  },
  mounted() {
    this.boxStyle = document.getElementById("box1").style;
  },
  methods: {
    fillGreen() {
      this.boxStyle.backgroundColor = "green";
    },
    fillBlue() {
      this.boxStyle.backgroundColor = "blue";
    },
  },
};
</script>
