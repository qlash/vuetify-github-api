import Vue from 'vue'
import moment from 'moment'

Vue.filter('datetime', (value = '') =>
  new Date(value).toLocaleString(navigator.language, { timeZone: 'UTC' })
)

Vue.filter('fromNow', value =>
  moment(value).startOf().fromNow()
)
