import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'
import './registerServiceWorker'

import firebase from 'firebase/app'
import 'firebase/auth'

import * as firebaseConfig from '../firebase.config.json'
import router from './router'

Vue.config.productionTip = false
new Vue({
  store,
  created () {
    firebase.initializeApp({
      apiKey: firebaseConfig.apiKey,
      authDomain: firebaseConfig.authDomain,
      databaseURL: firebaseConfig.databaseURL,
      projectId: firebaseConfig.projectId,
      storageBucket: firebaseConfig.storageBucket,
      messagingSenderId: firebaseConfig.messagingSenderId
    })
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const auth = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }

        if (user.isAnonymous) {
          auth.name = 'Anonymous'
        }

        this.$store.dispatch('setLogin', auth)
      }
    })
  },
  render: h => h(App),
  router
}).$mount('#app')
