<template>
  <v-container>
    <v-alert
      type="warning"
      :value="show"
    >
      You haven't added <a
        href="https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line"
        target="_blank"
      >github token</a> to your app.
      Create file .env.local and add your token there with key VUE_APP_GITHUB_TOKEN
    </v-alert>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    show: !process.env.VUE_APP_GITHUB_TOKEN
  })
}
</script>
