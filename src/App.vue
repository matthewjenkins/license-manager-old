<template>
  <v-app>
    <v-toolbar
      app
      dark
      color="primary"
    >
      <v-toolbar-items>
        <v-btn
          flat
          class="text-uppercase title"
          to="/"
        >
          License Manager
        </v-btn>
      </v-toolbar-items>
      <v-spacer />
      <v-toolbar-items>
        <v-btn
          flat
          to="/about"
        >
          About
        </v-btn>
        <v-menu
          v-if="isAuthed"
          offset-y
        >
          <template v-slot:activator="{ on }">
            <v-btn
              flat
              v-on="on"
            >
              Account
              <v-icon dark>
                arrow_drop_down
              </v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-tile to="/account/profile">
              <v-list-tile-title>Profile</v-list-tile-title>
            </v-list-tile>
            <v-divider />
            <v-list-tile @click="logOut">
              <v-list-tile-title>Sign Out</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-btn
          v-if="!isAuthed"
          flat
          to="/account/login"
        >
          Login
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view />
      </transition>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data: () => ({}),
    computed: {
      isAuthed () {
        return this.$store.getters.isAuthed
      }
    },
    methods: {
      logOut () {
        this.$store.dispatch('logout')
        this.$router.push('/')
      }
    }
  }
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
