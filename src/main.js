import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faHatWizard, faUser, faStar } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHatWizard, faUser, faStar)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')


// md5: 601879f85f8260e02e868b8443c63a91
// public: 1eba77a39ee351e1409b23eb324a772f
//private:  73cdcd02be7e9fac3e39292cc5ed93e33957e4c1
// ts: 1

//https://gateway.marvel.com/v1/public/characters?ts=1&apikey=1eba77a39ee351e1409b23eb324a772f&hash=601879f85f8260e02e868b8443c63a91