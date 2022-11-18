<template>
  <div>

    <div id="image-map">
      <img width="611" height="438" src="https://i.imgur.com/VlW9u1t.png" alt="Our Locations">
      <div class="pin pin-down" data-xpos="115" data-ypos="125">
        <h2>Willowbrook Place</h2>
        <ul>
          <li><strong>123 Street Address</strong></li>
          <li>City, ST, 12345</li>
          <li><strong>(555) 555-5555</strong></li>
          <li><a href="#" target="_blank">Website</a></li>
          <li>Coming in Spring 2015</li>
        </ul>
      </div>
      <div class="pin pin-down" data-xpos="215" data-ypos="175">
        <h2>Ambergrove Place</h2>
        <ul>
          <li><strong>123 Street Address</strong></li>
          <li>City, ST, 12345</li>
          <li><strong>(555) 555-5555</strong></li>
          <li><a href="#" target="_blank">Website</a></li>
          <li>Coming in Spring 2015</li>
        </ul>
      </div>
      <div class="pin" data-xpos="255" data-ypos="65">
        <h2>Chelsea Place</h2>
        <ul>
          <li><strong>123 Street Address</strong></li>
          <li>City, ST, 12345</li>
          <li><strong>(555) 555-5555</strong></li>
          <li><a href="#" target="_blank">Website</a></li>
          <li>Coming in Spring 2015</li>
        </ul>
      </div>
    </div>

  </div>

</template>





<script >

export default {
  name: 'image-map',
  // props: {
  //   msg: String
  // }


  mounted: function () {
    //語法為 $（對象）. 行為（參數/任務）
    // $('li.list').addClass('color');
    $(document).ready(function () {

      // set the image-map width and height to match the img size
      $('#image-map').css({
        'width': $('#image-map img').width(),
        'height': $('#image-map img').height()
      })

      //tooltip direction
      var tooltipDirection;

      for (i = 0; i < $(".pin").length; i++) {
        // set tooltip direction type - up or down             
        if ($(".pin").eq(i).hasClass('pin-down')) {
          tooltipDirection = 'tooltip-down';
        } else {
          tooltipDirection = 'tooltip-up';
        }

        // append the tooltip
        $("#image-map").append("<div style='left:" + $(".pin").eq(i).data('xpos') + "px;top:" + $(".pin").eq(
          i).data('ypos') + "px' class='" + tooltipDirection + "'>\
                                           <div class='tooltip'>" + $(".pin").eq(i).html() + "</div>\
                                   </div>");
      }

      // show/hide the tooltip
      $('.tooltip-up, .tooltip-down').mouseenter(function () {
        $(this).children('.tooltip').fadeIn(100);
      }).mouseleave(function () {
        $(this).children('.tooltip').fadeOut(100);
      })
    });
  }


} //export default

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/1018tooltip_all.css";
</style>
