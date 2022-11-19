import { createApp } from 'vue'
// import App from './App.vue'
import App from './components/image-map.vue'
// import App from './components/timeLine_joeyapi.vue'

// ===== vuetify =====
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import 'vuetify/dist/vuetify.min.css'



// import axios from 'axios';
// Vue.prototype.$axios = axios;


loadFonts()
createApp(App)
  .use(vuetify)
  .mount('#app')
