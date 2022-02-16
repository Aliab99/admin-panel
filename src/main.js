import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import 'jquery/src/jquery.js'
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/css/style.css'
import './assets/iconFont/css/fontello.css'

createApp(App).use(store).use(router).mount('#app')
