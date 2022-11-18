import { createApp } from 'vue'
import App from './App.vue'
// import App from './components/axio.vue'
// import App from './components/timeLine_joey.vue'


import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
// import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

// 於 main.js 引用
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// window.axios = require('axios');
// Vue.use(VueAxios, axios)

// import axios from 'axios';
// Vue.prototype.$axios = axios;


loadFonts()
createApp(App)
  .use(vuetify)
  .mount('#app')
