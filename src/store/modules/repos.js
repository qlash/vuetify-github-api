async function getLastCommitDate (url, axios) {
  const { 0: commits_url } = url.match(/^[^{]+/g)
  let res_commits = await axios.get(commits_url)

  if (res_commits.headers.link) {
    const link = res_commits.headers.link.split(',')
    const last = link.find(item => item.includes('rel="last"'))
    const { 1: last_link } = last.match(/([^<>])+/g)
    if (last_link) {
      res_commits = await axios.get(last_link)
    }
  }

  const { data: commit_list } = res_commits
  const { commit: { author: { date: last_commit_date } } } = commit_list.pop()
  return last_commit_date
}

export default {
  namespaced: true,
  state: () => ({
    list: null
  }),
  getters: {
    sortedList (state) {
      const { list = [] } = state
      return list.concat().sort((a, b) => b.pulls_count - a.pulls_count)
    }
  },
  mutations: {
    setList (state, payload) {
      state.list = payload
    },
    setData (state, payload) {
      const { id, created_at, name } = payload
      const user = state.list.find(item => item.id === id)

      user.name = name
      user.created = created_at
    }
  },
  actions: {
    async get ({ dispatch }) {
      const response = await this.axios.get('https://api.github.com/repositories')
      const { data } = response

      // data is limited due to github api query limits
      dispatch('getDataFromUrl', data.slice(0, 5))
    },
    getDataFromUrl ({ commit }, payload) {
      const promise_list = payload.map(async repo => {
        const { id, full_name } = repo

        const { 0: pulls_url } = repo.pulls_url.match(/^[^{]+/)
        const res_pulls = await this.axios.get(pulls_url)
        const { data: pulls } = res_pulls

        const res_url = await this.axios.get(repo.url)
        const { open_issues, stargazers_count: stars } = res_url.data

        const last_commit_date = await getLastCommitDate(repo.commits_url, this.axios)

        const res_issues = await this.axios.get(`https://api.github.com/search/issues?q=repo:${full_name}`)
        const { total_count: issues_count } = res_issues.data

        return {
          id,
          full_name,
          pulls_count: pulls.length,
          issues_count,
          pr_per_issue: pulls.length / (issues_count || 1),
          open_issues,
          stars,
          last_commit_date
        }
      })

      Promise.all(promise_list)
        .then(list => commit('setList', list))
    }
  }
}
