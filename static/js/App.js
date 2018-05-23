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

new Vue({
    el: '#vue-app',
    Router,
    components: { App },
    template: '<App />'
})



