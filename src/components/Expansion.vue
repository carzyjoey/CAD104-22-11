<template>
  <div>

    <div class="text-center d-flex pb-4">
      <v-btn class="ma-2" @click="all">
        All
      </v-btn>
      <v-btn class="ma-2" @click="none">
        None
      </v-btn>
    </div>

    <!-- <div class="pb-4">v-model {{ panel }}</div> -->
    <!-- <div class="pb-4" style="visibility:hidden">v-model {{ panel }}</div> -->

    <!-- <v-col cols="6" md="3" v-for="item in messages" :key="item.id"> -->
    <v-expansion-panels v-model="panel" multiple>
      <!-- <v-expansion-panels v-model="panel" multiple v-for="item in panel" :key="item.id"> -->

      <!-- <v-expansion-panel title={{ item.title }} text="
        機構設計 : 熟悉 產品機構設計 電腦輔助設計軟體操作 提供樣品圖樣 專利申請之事前調查分析.品質工程 : 品質工程也經過 半導體, 電子散熱, TFTLCD 等產品的學習, 做過 可靠度分析報告撰寫與彙整 執行產品可靠度測試與問題分析 新產品導入的材料評核與確認
        " value="foo2"></v-expansion-panel> -->

      <v-expansion-panel title="機構設計: 產品與結構評估。" text="
      熟悉  產品機構設計 電腦輔助設計軟體操作 提供樣品圖樣 專利申請之事前調查分析.2次開發 : 對 TFT LCD 2次開發 配合 軟體程式設計 有實作經驗 
      " value=" foo"></v-expansion-panel>

      <v-expansion-panel title="品質工程: 半導體, 電子散熱, TFT-LCD 等產品的學習。" text="
      品質工程也經過 半導體, 電子散熱, TFTLCD 等產品的學習, 做過 可靠度分析報告撰寫與彙整 執行產品可靠度測試與問題分析 新產品導入的材料評核與確認 
      " value=" foo1"></v-expansion-panel>

      <v-expansion-panel title="專案管理: 歷經 數百項 散熱模組 ; LCD 模組; 產品機構專案" text="
      歷經 數百項 散熱模組 ; LCD 模組; 背光模組 產品機構專案, 熟悉使用 專案管理架構及專案說明 專案時間╱進度控管 專案溝通╱整合管理 專案管理軟體操作. 文件管理 : 曾擔任 開發部門 材料評估擔當 對 資料庫程式設計 資料庫軟體應用 資料庫系統管理維護 文件管理中心之建立與維護 有多年的經驗     
      " value="baz">
      </v-expansion-panel>

      <v-expansion-panel title="團隊: 人員培訓與激勵 輔導與管理" text="
      對於團隊長期的發展 人員培訓與激勵 輔導與管理 也有經驗
      " value="bar"></v-expansion-panel>
    </v-expansion-panels>

  </div>
</template>

<script>
export default {
  name: 'Expansion',

  // data() {
  //   return {
  //     panel: [],
  //   }
  // },

  data: () => ({
    show: false,
    panel: [
      {
        title: 'PTC 原廠授權教育訓練',
        text: `
        進階建模 (Advanced Modeling) ; 細節出圖(工程圖) ; 鈑金設計(Sheetmetal) ; 進階組件(AAX-Advanced Assembly) ; 高階曲面建模設計 (Surface) ; 自由曲面設計 (ISDX) ; 分析結構和熱特性 ;
        `,
        // img: 'ProE證書.jpg',
        // color: 'deep-purple-lighten-1',
      },
    ],
  }),


  methods: {
    all() {
      this.panel = ['foo', 'foo1',
        'bar',
        'baz']
    },
    none() {
      this.panel = []
    },
  },
} //export default
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
