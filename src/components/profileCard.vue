<template>
  <div>

        <v-card class="mx-auto" max-width="434" rounded="0">
          <!-- <v-img height="100%" cover src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"> -->
            <v-img height="100%" cover src="@/assets/img/Mechanical.jpg">
            
            <v-avatar color="grey" size="180" rounded="0">
              <!-- <v-img cover src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img> -->
              <v-img cover src="@/assets/img/joey.png"></v-img>
            </v-avatar>
            <v-list-item class="text-white" title="Joey Yu" subtitle="Mechanical Engineer"></v-list-item>
          </v-img>
        </v-card>

  </div>
</template>

<script>
export default {
  name: 'profileCard',
  // props: {
  //   msg: String
  // }
} //export default
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
