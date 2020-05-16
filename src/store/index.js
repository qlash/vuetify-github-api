import Vue from 'vue'
import Vuex from 'vuex'

import organizations from './modules/organizations'
// import users from './modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    organizations
    // users
  }
})
