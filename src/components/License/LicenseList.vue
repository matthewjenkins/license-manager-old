<template>
  <div
    v-if="busy"
    class="text-xs-center"
  >
    <v-progress-linear
      :indeterminate="true"
      color="primary"
    />
  </div>
  <v-container
    v-else
    fluid
    grid-list-lg
  >
    <v-layout
      row
      wrap
    >
      <license-item
        v-for="license in licenses"
        :key="license.id"
        :license="license"
      />
    </v-layout>
  </v-container>
</template>

<script>

  import LicenseItem from '@/components/License/LicenseItem'
  export default {
    name: 'LicenseList',
    components: {
      LicenseItem
    },
    data: () => ({
      busy: false,
      deleteDialog: false
    }),
    computed: {
      licenses () {
        return this.$store.getters.licenses
      }
    },
    mounted () {
      if (!this.licenses.length) this.fetchLicenses()
    },
    methods: {
      fetchLicenses () {
        this.busy = true
        this.$store.dispatch('fetchLicenses').then(() => {
          this.busy = false
        })
      }
    }
  }
</script>

<style>
</style>
