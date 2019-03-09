<template>
  <v-container
    fluid
    grid-list-sm
  >
    <v-form
      id="register"
      @submit.prevent="register"
    >
      <div>
        <v-alert
          v-for="(error, index) in errors"
          :key="index"
          type="error"
          :value="true"
        >
          {{ error }}
        </v-alert>
      </div>
      <v-text-field
        v-model="email"
        label="E-mail"
        required
        type="email"
      />
      <v-text-field
        v-model="password"
        label="Password"
        required
        type="password"
      />
      <v-btn
        type="submit"
        block
        :disabled="busy"
      >
        submit
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
  import firebase from 'firebase/app'
  import 'firebase/auth'

  export default {
    data: () => ({
      email: '',
      password: '',
      errors: [],
      busy: false
    }),
    methods: {
      register (e) {
        e.preventDefault()
        this.busy = true

        this.errors.length = 0
        const form = document.getElementById('register')
        if (!form.checkValidity()) {
          form.reportValidity()
          this.busy = false
          return
        }

        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(response => {
            this.$router.push('/account/login')
          })
          .catch(err => {
            this.errors.push(err.message)
          })
          .finally(() => {
            this.busy = false
            this.password = ''
            this.email = ''
          })
      }
    }
  }
</script>
