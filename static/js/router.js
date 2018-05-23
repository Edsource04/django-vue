import Vue from 'vue'
import VueRouter from 'vue-router'
import Clients from './components/Clients.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/', name: 'Clients', component: Clients
        }
    ]
})