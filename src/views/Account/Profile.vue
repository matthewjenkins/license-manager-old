<template>
  <div>
    <h1>Profile</h1>
    <img
      :src="user.photoUrl"
      alt=""
    >
  </div>
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

<style></style>
