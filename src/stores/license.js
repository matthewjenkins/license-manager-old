import firebase from 'firebase/app'
import 'firebase/database'

export default {
  state: {
    licenses: [],
    tags: []
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
    },
    SET_TAGS (state, payload) {
      state.tags = payload
    },
    ADD_TAGS (state, payload) {
      state.tags.push(payload)
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
              const license = s[l]
              license.createdOn = new Date(license.createdOn)
              if (license.expiresOn) {
                license.expiresOn = new Date(license.expiresOn)
              }

              licenses.push(license)
          }
          commit('SET_LICENSES', licenses)
        })
    },
    addLicense ({ commit, state }, payload) {
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

        console.log('tags', state.tags)
        console.log('setTags', license.tags)
        const newTags = license.tags.filter(t => !state.tags.includes(t))
        if (newTags.length) {
        for (const newTag of newTags) {
          firebase
          .database()
          .ref(`users/${userId}`)
          .child('tags')
          .push(newTag)
        }

        commit('ADD_TAGS', newTags)
      }
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
    },
    fetchTags ({ commit }) {
      const userId = firebase.auth().currentUser.uid
      firebase.database()
      .ref(`users/${userId}`)
      .child('tags')
      .once('value')
      .then(snapshot => {
        const tags = []
        const s = snapshot.val()
        for (const t in s) {
          console.log(s[t])
          tags.push(s[t])
        }
        commit('SET_TAGS', tags)
      })
    }
  },
  getters: {
    licenses (state) {
      return state.licenses
    },
    tags (state) {
      return state.tags
    }
  }
}
