require('./bootstrap');
   
window.Vue = require('vue');
import VueRouter from 'vue-router'

import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuelidate from 'vuelidate'
import VueCroppie from 'vue-croppie';
import 'croppie/croppie.css' // import the croppie css manually
//support vuex
import Vuex from 'vuex'

Vue.use(Vuex)

import storeData from "./store/index"

const store = new Vuex.Store(
   storeData
)


 
Vue.use(VueCroppie);

Vue.use(Vuelidate)
 
Vue.use(VueAxios, axios)

Vue.use(VueRouter)
   
const routes = [
  { path: '/home', component: require('./components/HomeComponent.vue').default },
  { path: '/first', component: require('./components/ExampleComponent.vue').default },
  { path: '/second', component: require('./components/SecondComponent.vue').default },
  { path: '/third', component: require('./components/ThirdComponent.vue').default },
]
  
const router = new VueRouter({
  routes 
})
  
const app = new Vue({
  router,
  store, //vuex
}).$mount('#app')

