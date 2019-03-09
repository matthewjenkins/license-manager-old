<template>
  <v-footer
    dark
    app
    class="justify-center"
  >
    <div class="white--text">
      &copy; {{ new Date().getFullYear() }} <strong>Leeroy Innovations, LLC.</strong>
    </div>
  </v-footer>
</template>

<script>
  export default {
    name: 'TheFooter'
  }
</script>
