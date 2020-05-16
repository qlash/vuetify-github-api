<template>
  <ColumnList
    :list="list"
    :title="'User list'"
  >
    <template v-if="list">
      <ColumnListItem
        v-for="user in list"
        :key="user.id"
      >
        <v-img
          max-width="300"
          fluid
          :src="user.avatar_url"
          class="mx-auto"
        />

        <v-card-title class="text-center justify-center">
          {{ user | nameLoginCombine }}
        </v-card-title>
        <v-tooltip
          top
          nudge-top="-25"
        >
          <template v-slot:activator="{ on }">
            <v-card-subtitle
              class="text-center justify-center"
              v-on="on"
            >
              Account created: {{ user.created | fromNow }}
            </v-card-subtitle>
          </template>
          <span>{{ user.created | datetime }}</span>
        </v-tooltip>
      </ColumnListItem>
    </template>
  </ColumnList>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ColumnList from './ColumnList'
import ColumnListItem from './ColumnListItem'

export default {
  components: {
    ColumnList,
    ColumnListItem
  },
  computed: {
    ...mapState('users', ['list'])
  },
  filters: {
    nameLoginCombine (user) {
      if (!user.name) return ''
      const nameSplitted = user.name.split(' ')
      nameSplitted.splice(1, 0, `"${user.login}"`)
      return nameSplitted.join(' ')
    }
  },
  methods: {
    ...mapActions({
      get: 'users/get'
    })
  },
  mounted () {
    this.get()
  }
}
</script>
