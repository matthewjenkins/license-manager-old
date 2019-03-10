import router from '../router'

export default {
  state: {
    user: null
  },
  mutations: {
    SET_AUTH (state, payload) {
      state.user = payload
      router.push('/')
    }
  },
  actions: {
    setLogin ({ commit }, payload) {
      commit('SET_AUTH', payload)
    },
    logout ({ commit }) {
      commit('SET_AUTH', null)
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    isAuthed (state) {
      return state.user !== null
    }
  }
}
