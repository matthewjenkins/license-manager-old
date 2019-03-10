<template>
  <v-flex
    xs12
    md6
    lg4
  >
    <v-card
      :key="license.id"
      class="license-item"
      tile
    >
      <v-card-title class="pb-0">
        <v-flex>
          <h3
            class="headline mb-2"
            :class="{'red--text' : isExpired }"
          >
            {{ license.title }}
          </h3>
          <hr class="mb-2">
          <div>
            <span class="subheading grey--text">Key: {{ license.key }}</span><br>
            <span
              class="grey--text"
              :title="license.createOn"
            >Added: {{ createdDate }}</span><br>
            <span
              v-if="license.expiresOn"
              class="grey--text"
            >Expires: {{ createdDate }}</span><br>
          </div>
        </v-flex>
      </v-card-title>
      <v-card-actions class="px-3 pt-0">
        <v-btn
          flat
          icon
          small
          title="copy key to clipboard"
          @click="copyKey"
        >
          <v-icon>file_copy</v-icon>
        </v-btn>
        <v-spacer />
        <delete-license :license-id="license.id" />
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
  import DeleteLicense from '@/components/License/DeleteLicense'
  export default {
    components: {
      DeleteLicense
    },
    props: {
      license: {
        type: Object,
        default: () => ({
          id: 'id',
          title: 'title',
          key: 'key',
          expiresOn: new Date(),
          createdOn: new Date()
        })
      }
    },
    data: () => ({
      date: new Date()
    }),
    computed: {
      isExpired () {
        return !!this.license.expiresOn && this.license.expiresOn < this.date
      },
      createdDate () {
        return this.license.createdOn.toLocaleDateString()
      },
      expiresDate () {
        if (!this.license.expiresOn) { return '' }

        return this.license.expiresOn.toLocaleDateString()
      }
    },
    methods: {
      copyKey () {
        const el = document.createElement('textarea')
        el.value = this.license.key
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)
      }
    }
  }
</script>
