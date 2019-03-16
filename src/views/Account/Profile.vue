<template>
  <v-container>
    <v-layout
      row
      wrap
    >
      <v-flex>
        <h1 class="headline">
          My Profile
        </h1>
        <v-avatar
          size="96"
          color="grey lighten-4"
        >
          <img
            :src="user.photoUrl"
            alt="avatar"
          >
        </v-avatar>
      </v-flex>
    </v-layout>
    <v-layout
      row
      wrap
      class="pt-3"
    >
      <v-flex>
        <v-text-field
          box
          disabled
          label="Name"
          :value="user.name"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      user () {
        return this.$store.getters.user
      }
    }
  }
</script>

<style>
</style>
