import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: null,
    LoggedIn: false,
    errors: null
  },
  mutations: {
    logUser (state, payload) {
      const user = Object.assign({}, state.user)
      state.user = payload
      //erase errors from state
      if(state.errors) state.errors = null
    },
    ["login-error"] (state, payload) {
      state.errors = payload
    }
  },
  getters: {
    getUser: state => { return state.user },
    isLoggedIn: state => { return state.LoggedIn },
    error: state => { return state.errors }
  },
  actions: {
    login ({ commit, state }, user) {
      //log user to api
      //if user authenticated
      if(user){
        commit('logUser', user)
      }else{
        commit('login-error', {type: 'login-error', message: 'Unable to Login: Username or Password is incorrect'})
      }

    }
  }
})

export default store;
