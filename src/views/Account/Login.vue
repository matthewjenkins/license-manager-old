<template>
  <v-container
    fluid
    grid-list-sm
  >
    <v-flex
      xs10
      offset-xs1
      sm6
      offset-sm3
      lg4
      offset-lg4
    >
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="email"
          label="Email"
          type="email"
          :rules="emailRules"
          required
        />
        <v-text-field
          v-model="password"
          label="Password"
          type="password"
          :rules="passwordRules"
          required
        />
        <v-alert
          type="error"
          :value="error"
        >
          {{ error }}
        </v-alert>
        <v-btn
          block
          color="info"
          @click="login"
        >
          Login
        </v-btn>
      </v-form>
    </v-flex>

    <v-layout align-center>
      <v-flex
        xs10
        offset-xs1
        sm6
        offset-sm3
        lg4
        offset-lg4
        class="pt-5"
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

        <v-btn
          color="info"
          block
          to="/account/register"
        >
          Register
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import firebase from 'firebase/app'
  import 'firebase/auth'

  export default {
    data: () => ({
      valid: true,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required'
      ],
      error: ''
    }),
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
      login () {
        this.error = ''
        if (!this.$refs.form.validate()) {
          this.$refs.form.reportValidity()
          return
        }

        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(response => {})
          .catch(err => {
            this.error = err.message
          })
      },
      loginGoogle () {
        firebase
          .auth()
          .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      },
      loginAnonymous () {
        firebase
          .auth()
          .signInAnonymously()
      }
    }
  }
</script>
