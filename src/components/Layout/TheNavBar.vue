<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      stateless
      app
      dark
    >
      <v-list>
        <v-list-group
          v-if="isAuthed"
          no-action
        >
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-avatar v-if="user.photoUrl">
                <img :src="user.photoUrl">
              </v-list-tile-avatar>
              <v-list-tile-action v-else>
                <v-icon>person</v-icon>
              </v-list-tile-action>
              <v-list-tile-title>{{ user.name }}</v-list-tile-title>
            </v-list-tile>
          </template>
          <v-list-tile to="/account/profile">
            <v-list-tile-action>
              <v-icon>account_circle</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Profile</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="logOut">
            <v-list-tile-action>
              <v-icon>exit_to_app</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Log Out</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
        <v-divider />
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/About">
          <v-list-tile-action>
            <v-icon>details</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>About</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <div v-if="!isAuthed">
          <v-divider />
          <v-list-tile
            to="/Account/Login"
          >
            <v-list-tile-action>
              <v-icon>account_box</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Login</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </div>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      dark
      fixed
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>License Manager</v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
  import firebase from 'firebase/app'
  import 'firebase/auth'

  export default {
    name: 'TheNavBar',
    data: () => ({
      drawer: null
    }),
    computed: {
      isAuthed () {
        return this.$store.getters.isAuthed
      },
      user () {
        return this.$store.getters.user
      }
    },
    methods: {
      logOut () {
        firebase.auth().signOut().then(() => {
          this.$store.dispatch('logout')
          this.$router.push('/')
        })
      }
    }
  }
</script>
