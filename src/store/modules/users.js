export default {
  namespaced: true,
  state: () => ({
    list: null
  }),
  mutations: {
    setList (state, payload) {
      state.list = payload.map(user => {
        const { id, login, avatar_url, url } = user

        return {
          id,
          login,
          avatar_url,
          name: null,
          created: null,
          url
        }
      })
    },
    setData (state, payload) {
      const { id, created_at, name } = payload
      const user = state.list.find(item => item.id === id)

      user.name = name
      user.created = created_at
    }
  },
  actions: {
    async get ({ commit, dispatch }) {
      const response = await this.axios.get('https://api.github.com/users')
      const { data } = response

      // data is limited due to github api query limits
      commit('setList', data.slice(0, 3))
      dispatch('getDataFromUrl')
    },
    getDataFromUrl ({ state, commit }) {
      state.list.forEach(async item => {
        const response = await this.axios.get(item.url)
        commit('setData', response.data)
      })
    }
  }
}
