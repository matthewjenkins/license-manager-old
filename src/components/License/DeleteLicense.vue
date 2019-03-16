<template>
  <div>
    <v-dialog
      v-model="dialog"
      hide-overlay
      persistent
      max-width="290"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          flat
          icon
          small
          title="delete license"
          @click="dialog = true"
          v-on="on"
        >
          <v-icon>delete</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">
          Delete License?
        </v-card-title>
        <v-card-text>
          Are you sure you want to delete this license? You can not undo this
          action once confirmed.
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            flat
            @click="dialog = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="red"
            flat
            @click="deleteLicense"
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    props: {
      licenseId:
        {
          type: String,
          default: ''
        }
    },
    data: () => ({
      dialog: false
    }),
    methods: {
      deleteLicense () {
        this.$store.dispatch('deleteLicense', this.licenseId)
      }
    }
  }
</script>

<style>
</style>
