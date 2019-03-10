<template>
  <v-dialog
    v-model="addDialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <template v-slot:activator="{ on }">
      <v-btn
        absolute
        fab
        color="red"
        right
        dark
        style="bottom: 25px"
        v-on="on"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-toolbar dark>
        <v-btn
          icon
          dark
          @click="addDialog = false"
        >
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Add</v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
          <v-btn
            dark
            flat
            :disabled="!valid"
            @click="addLicense"
          >
            Save
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-container grid-list-xl>
        <v-layout
          wrap
          justify-space-between
        >
          <v-flex
            xs-12
            md8
          >
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation=""
            >
              <v-text-field
                v-model="title"
                label="Title"
                :rules="titleRules"
                required
              />
              <v-text-field
                v-model="key"
                label="Key"
                required
                :rules="keyRules"
              />
              <v-dialog
                ref="dialog"
                v-model="expiresOnDialog"
                :return-value.sync="expiresOn"
                persistent
                lazy
                full-width
                width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="expiresOn"
                    label="Expiration Date"
                    prepend-icon="event"
                    readonly
                    v-on="on"
                  />
                </template>
                <v-date-picker
                  v-model="expiresOn"
                  scrollable
                >
                  <v-spacer />
                  <v-btn
                    flat
                    color="primary"
                    @click="expiresOnDialog = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    flat
                    color="primary"
                    @click="$refs.dialog.save(expiresOn)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
            </v-form>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    data: () => ({
      addDialog: false,
      expiresOnDialog: false,
      valid: false,
      title: '',
      titleRules: [
        v => !!v || 'Title is required'
      ],
      key: '',
      keyRules: [
        v => !!v || 'Key is request'
      ],
      expiresOn: null
    }),
    methods: {
      addLicense () {
        if (!this.$refs.form.validate()) return

        const license = {
          title: this.title,
          key: this.key,
          expiresOn: this.expiresOn,
          createdOn: new Date()
        }

        this.addDialog = false
        this.$refs.form.reset()

        this.$store.dispatch('addLicense', license)
      }
    }
  }
</script>

<style>
</style>
