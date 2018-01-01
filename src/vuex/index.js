import Vuex from 'vuex'
import Vue from 'vue'
import header from './header'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    header: header
  }
})

export default store
