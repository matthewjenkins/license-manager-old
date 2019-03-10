import firebase from 'firebase/app'
import 'firebase/database'

export default {
  state: {
    licenses: []
  },
  mutations: {
    SET_LICENSES (state, payload) {
      state.licenses = payload
    },
    ADD_LICENSE (state, payload) {
      state.licenses.push(payload)
    },
    REMOVE_LICENSE (state, payload) {
      state.licenses = state.licenses.filter(f => f.id !== payload)
    }
  },
  actions: {
    fetchLicenses ({ commit }) {
        const userId = firebase.auth().currentUser.uid

        firebase
        .database()
        .ref(`users/${userId}`)
        .child('licenses')
        .once('value')
        .then(snapshot => {
          const licenses = []
          const s = snapshot.val()
          for (const l in s) {
              licenses.push(s[l])
          }
          commit('SET_LICENSES', licenses)
        })
    },
    addLicense ({ commit }, payload) {
        const userId = firebase.auth().currentUser.uid

        var record = firebase
            .database()
            .ref(`users/${userId}`)
            .child('licenses')
            .push()

         const license = payload
         license.id = record.key

        record.update(license)
        commit('ADD_LICENSE', license)
    },
    deleteLicense ({ commit }, payload) {
        const userId = firebase.auth().currentUser.uid
      const licenseId = payload

      firebase.database()
      .ref(`users/${userId}`)
      .child('licenses')
      .child(licenseId)
      .remove().then(() => {
        commit('REMOVE_LICENSE', licenseId)
      })
    }
  },
  getters: {
    licenses (state) {
      return state.licenses
    }
  }
}
