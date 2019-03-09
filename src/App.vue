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
    <the-footer />
  </v-app>
</template>

<script>
  import TheNavBar from './components/Layout/TheNavBar'
  import TheFooter from './components/Layout/TheFooter'

  export default {
    name: 'App',
    components: {
      TheNavBar,
      TheFooter
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
