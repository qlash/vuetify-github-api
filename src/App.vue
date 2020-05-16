<template>
  <v-app dark>
    <v-app-bar
      app
      color="teal"
    >
      <v-btn
        text
        to="/"
        active-class="no-active"
      >
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <h1 class="title hidden-sm-and-down white--text">
          {{ title }}
        </h1>
      </v-btn>

      <v-spacer />

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',

  components: {
    HelloWorld
  },

  data: () => ({
    title: process.env.VUE_APP_TITLE
  })
}
</script>

<style>
.v-btn--active.no-active::before {
  opacity: 0 !important;
}
</style>
