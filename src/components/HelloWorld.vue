<template>
  <v-container>
    <v-flex text-xs-center>
      <h1 class="headline font-weight-bold mb-3">
        License Manager
      </h1>
    </v-flex>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex
        mb-5
        xs12
      >
        <h2 class="headline font-weight-bold mb-3">
          Vue
        </h2>
        <v-layout justify-center>
          <a
            href="https://vuejs.org/"
            target="_blank"
            class="subheading mx-3"
          >Vuejs</a>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex
        mb-5
        xs12
      >
        <h2 class="headline font-weight-bold mb-3">
          Firebase
        </h2>
        <v-layout justify-center>
          <a
            href="https://firebase.google.com/"
            target="_blank"
            class="subheading mx-3"
          >Google Firebase</a>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex
        mb-5
        xs12
      >
        <h2 class="headline font-weight-bold mb-3">
          Vuetify
        </h2>

        <v-layout justify-center>
          <a
            v-for="(next, i) in vuetify"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader'
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify'
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify'
        }
      ],

      vuetify: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer'
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/layout/pre-defined'
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
        }
      ]
    })
  }
</script>
