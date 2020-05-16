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
        :ripple="false"
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
    </v-app-bar>

    <v-content>
      <TokenAlert />
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import TokenAlert from '@/components/TokenAlert'

export default {
  name: 'App',
  components: {
    TokenAlert
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
