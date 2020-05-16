import Vue from 'vue'

Vue.filter('datetime', (value = '') =>
  new Date(value).toLocaleString(navigator.language, { timeZone: 'UTC' })
)
