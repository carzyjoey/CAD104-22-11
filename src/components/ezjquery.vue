<template>
  <div>

    <button>Click me</button>
    <div id="panel">Hello World!</div>

  </div>

</template>

<script>
export default {
  name: 'ez-jquery',
  // props: {
  //   msg: String
  // }

  mounted: function () {
    $(document).ready(function () {
      $("#panel").hide();
      $("button").click(function () {
        $("#panel").slideToggle();
      });
    });
  } //mounted:
  
  // //語法為 $（對象）. 行為（參數/任務）
  // $('li.list').addClass('color');
  // // 此為找到 DOM 中的 li 標籤同時有 class name 為 list 的對象
  // // 對此對象進行增加 class name 為 color

}//export default
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<!-- <style src="../assets/EZjQ.css"></style> -->
<style scoped>
@import "../assets/EZjQ.css";
</style>
