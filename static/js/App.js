import Vue from 'vue'
import VueResource from 'vue-resource'
import Vuetify from 'vuetify'
import Clients from './components/Clients.vue'

Vue.use(VueResource)
Vue.use(Vuetify)

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist//material-design-icons.css'
import 'babel-polyfill'

new Vue(Clients).$mount("#vue-app")



