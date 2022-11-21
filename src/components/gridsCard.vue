<template>
  <div>

    <v-container class="grey lighten-5">
      <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
      <v-row>

        <!-- <v-col cols="6" md="3"> -->
        <v-col cols="6" md="3" v-for="item in messages" :key="item.id">
          <!-- .col-6 .col-md-4 -->

          <v-card class="mx-auto" max-width="344">

            <v-img :src="require(`../assets/img/${item.img}`)" height="150px" cover></v-img>

            <v-card-title>{{ item.title }}</v-card-title>
            <!-- <v-card-subtitle>1,000 miles of wonder</v-card-subtitle> -->
            <v-card-subtitle>{{ item.time }}</v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange-lighten-2" variant="text">Explore</v-btn>
              <v-spacer></v-spacer>
              <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  {{ item.text }}
                </v-card-text>
              </div>
            </v-expand-transition>

          </v-card>
        </v-col>
      </v-row>

    </v-container>

  </div>
</template>

<script>
export default {
  name: 'gridsCard',

  data: () => ({
    show: false,
    messages: [
      {
        title: 'PTC 原廠授權教育訓練',
        text: `
        進階建模 (Advanced Modeling) ; 細節出圖(工程圖) ; 鈑金設計(Sheetmetal) ; 進階組件(AAX-Advanced Assembly) ; 高階曲面建模設計 (Surface) ; 自由曲面設計 (ISDX) ; 分析結構和熱特性 ;
        `,
        img: 'ProE證書.jpg',
        // color: 'deep-purple-lighten-1',
      },
      {
        title: '單晶片控制系統班',
        text: `
        C程式設計(C Programming Language );數位電路(單晶片韌體開發);嵌入式軟體設計(專題實作) ;
        `,
        img: '單晶片證書.jpg',

      },
      {
        title: '跨平台網頁程式設計班',
        text: `
        1.知識學科： 系統分析與設計，MS-SQL資料庫。 2.技能術科： (1)網頁前端技術HTML+JavaScript +CSS3、jQuery、RWD。 (2)網頁後端技術: C# 程式語言，結合ASP.net MVC 框架，MS-SQL 資料庫。 PHP程式語言，結合Laravel MVC框架，MySQL 資料庫。 3.版本控管: GitHub、Source Tree。       
        `,
        img: '網頁程式證書.jpg',

      },
    ],
  }),
} //export default
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
