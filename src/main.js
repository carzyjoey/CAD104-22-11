import { createApp } from 'vue'
import App from './App.vue'
// import App from './components/test.vue'
// import App from './components/timeLine_joey.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

// import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

loadFonts()

createApp(App)
  .use(vuetify)
  .mount('#app')
