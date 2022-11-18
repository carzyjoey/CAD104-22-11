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
    <div class="pb-4" style="visibility:hidden">v-model {{ panel }}</div>

    <v-expansion-panels v-model="panel" multiple>
      <v-expansion-panel title="產品機構設計與結構評估。" text="
        機構設計 : 熟悉 產品機構設計 電腦輔助設計軟體操作 提供樣品圖樣 專利申請之事前調查分析.品質工程 : 品質工程也經過 半導體, 電子散熱, TFTLCD 等產品的學習, 做過 可靠度分析報告撰寫與彙整 執行產品可靠度測試與問題分析 新產品導入的材料評核與確認
        
        " value="foo"></v-expansion-panel>

      <v-expansion-panel title="團隊 : 對於團隊長期的發展 人員培訓與激勵 輔導與管理 也有經驗" text="
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        
        " value="bar"></v-expansion-panel>

      <v-expansion-panel title="專案管理 : 歷經 數百項 散熱模組 ; LCD 模組; 背光模組 產品機構專案" text="
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      
      " value="baz"></v-expansion-panel>
    </v-expansion-panels>

  </div>
</template>

<script>
export default {
  name: 'Expansion',

  data() {
    return {
      panel: [],
    }
  },
  methods: {
    all() {
      this.panel = ['foo',
        'bar',
        'baz']
    },
    none() {
      this.panel = []
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
