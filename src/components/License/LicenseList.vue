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
  <v-list
    v-else
    three-line
  >
    <template v-for="(license, index) in licenses">
      <v-divider :key="index" />
      <v-list-tile :key="license.id">
        <v-list-tile-content>
          <v-list-tile-title>{{ license.title }}</v-list-tile-title>
          <v-list-tile-sub-title>{{ license.key }}</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <delete-license :license-id="license.id" />
        </v-list-tile-action>
      </v-list-tile>
    </template>
  </v-list>
</template>

<script>
  import DeleteLicense from '@/components/License/DeleteLicense'
  export default {
    name: 'LicenseList',
    components: {
      DeleteLicense
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
