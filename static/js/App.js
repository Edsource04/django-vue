import Vue from 'vue'
import VueResource from 'vue-resource'
import Vuetify from 'vuetify'
import App from './App.vue'
import Router from './router'

Vue.use(VueResource)
Vue.use(Vuetify)

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist//material-design-icons.css'
import 'babel-polyfill'

const app = new Vue({
    Router,
    render: createEle => createEle(App)
}).$mount('#vue-app')



