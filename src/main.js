import { createApp } from 'vue'
import axios from '../node_modules/axios/dist/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import HighchartsVue from 'highcharts-vue'
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'jquery/src/jquery.js'
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/css/style.css'
import './assets/iconFont/css/fontello.css'

axios.defaults.baseURL = 'http://nikted.com/';

createApp(App).use(store).use(router).mount('#app')
