import { createApp } from 'vue'
import App from './App.vue'
// import App from './imageGridG12sop.vue'
// import App from './components/imageGridG12sop.vue'
// import App from './components/siteMap2.vue'
// import App from './components/iFrameSortTable.vue'

// ===== vuetify =====
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import 'vuetify/dist/vuetify.min.css'

// import axios from 'axios';
// Vue.prototype.$axios = axios;

// ===== jQuery =====
import jQuery from 'jquery'
window.$ = window.jQuery = jQuery

// ===== D3.js =====
// import * as d3 from 'd3'

loadFonts()
// createApp(App)
//   .use(vuetify)
//   .mount('#app')



import router from './router/'
createApp(App)
.use(vuetify)
.use(router)
.mount('#app')


