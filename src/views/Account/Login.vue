<template>
  <v-layout align-center>
    <v-flex
      xs12
      sm4
      offset-sm4
    >
      <v-btn
        block
        color="info"
        @click="loginGoogle"
      >
        Login With Google
      </v-btn>
      <v-btn
        block
        color="info"
        @click="loginAnonymous"
      >
        Login As Anonymous
      </v-btn>
      <v-divider />
      <v-btn
        color="info"
        block
        to="/account/register"
      >
        Register
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    computed: {
      user () {
        return this.$store.getters.user
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/')
        }
      }
    },
    methods: {
      loginGoogle () {
        this.$store.dispatch('loginWithGoogle')
      },
      loginAnonymous () {
        this.$store.dispatch('loginAnonymously')
      }
    }
  }
</script>
