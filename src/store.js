import Vue from 'vue'
import Vuex from 'vuex'

import auth from './stores/auth'
import licenses from './stores/license'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    license: licenses
  }
})
