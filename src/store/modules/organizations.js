export default {
  namespaced: true,
  state: () => ({
    list: null
  }),
  mutations: {
    setList (state, payload) {
      state.list = payload.map(item => {
        const { id, login, avatar_url, url } = item
        return {
          id,
          login,
          avatar_url,
          url,
          followers: null,
          created: null,
          repos: null
        }
      })
    },
    setData (state, payload) {
      const { id, created_at, followers, public_repos } = payload
      const org = state.list.find(item => item.id === id)

      org.followers = followers
      org.created = created_at
      org.repos = public_repos
    }
  },
  actions: {
    async get ({ commit, dispatch }) {
      const response = await this.axios.get('https://api.github.com/organizations')
      const { data } = response

      // data is limited due to github api query limits
      commit('setList', data.slice(0, 3))
      dispatch('getUrl')
    },
    getUrl ({ state, commit }) {
      state.list.forEach(async item => {
        const response = await this.axios.get(item.url)
        commit('setData', response.data)
      })
    }
  }
}
