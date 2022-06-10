import { createApp } from 'vue'
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/es'
import App from './App.vue'

import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
import '@quasar/extras/themify/themify.css'

import 'quasar/src/css/index.sass'

import router from './assets/plugins/router.js'

createApp(App)
.use(Quasar, { plugins: {}, lang: quasarLang })
.use(router)
.mount('#app')