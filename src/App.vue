<template>
  <v-app>
    <the-nav-bar />
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
  import TheNavBar from './components/Layout/TheNavBar'

  export default {
    name: 'App',
    components: {
      TheNavBar
    },
    data: () => ({})
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
