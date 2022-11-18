<template>
  <v-carousel hide-delimiters>
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'carousel',

  data() {
    return {
      items: [
        {
          src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivyjlZcfQnZG637e_rJGbgtOHfwtmombutY0HA124peeDQ7AP1Mn5QcGkzZDbEptpnD5JM2d9wWi1w5dGNYJX7XCwTipjEzo9t7IXLZ62ob6uz0KGkkBorQ_xNiCf63XgeJVXCg6SI_9TLmV27BU4Y5LagJTRVgj2Lwn91by9x845DSxSep3iFRmP8Fg/w640-h328/20221108002.png',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    }
  },
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
