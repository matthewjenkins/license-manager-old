import router from '../router'
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  state: {
    user: null
  },
  mutations: {
    setAuth (state, payload) {
      state.user = payload
      router.push('/')
    }
  },
  actions: {
    loginWithGoogle ({ commit }) {
      firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(response => {
          if (response.user === null) { throw new Error('Unexpected user response from google login.') }

          const user = {
            id: response.user.uid,
            name: response.user.displayName,
            email: response.user.email,
            photoUrl: response.user.photoURL
          }

          commit('setAuth', user)
        })
    },
    loginAnonymously ({ commit }) {
      firebase
      .auth()
      .signInAnonymously()
      .then(response => {
        const user = {
          id: response.user.uid,
          name: response.user.displayName,
          email: response.user.email,
          photoUrl: response.user.photoURL
        }

        commit('setAuth', user)
      })
    },
    autoLogin ({ commit }, payload) {
      commit('setAuth', {
        id: payload.uid,
        name: payload.displayName,
        email: payload.email,
        photoUrl: payload.photoURL
      })
    },
    logout ({ commit }) {
      firebase.auth().signOut()
      commit('setAuth', null)
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
