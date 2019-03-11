<template>
  <v-layout>
    <v-flex>
      <license-list />
      <v-layout
        column
        class="fab-container"
      >
        <add-license />
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
  import AddLicense from '@/components/License/AddLicense'
  import LicenseList from '@/components/License/LicenseList'

  export default {
    name: 'Licenses',
    components: {
      AddLicense,
      LicenseList
    }
  }
</script>

<style>
.fab-container {
    position: fixed;
    bottom: 18px;
    right: 0;
}
</style>
