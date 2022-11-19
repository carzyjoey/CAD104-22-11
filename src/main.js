import { createApp } from 'vue'
import App from './App.vue'
// import App from './components/z2.vue'
// import App from './components/swiperVue.vue'
// import App from './components/timeLine_joeyapi.vue'

// ===== vuetify =====
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import 'vuetify/dist/vuetify.min.css'

// import axios from 'axios';
// Vue.prototype.$axios = axios;

// ===== jQuery =====
import jQuery from 'jquery'
window.$ = window.jQuery = jQuery


loadFonts()
// createApp(App)
//   .use(vuetify)
//   .mount('#app')



import router from './router/'
createApp(App)
.use(vuetify)
.use(router)
.mount('#app')


