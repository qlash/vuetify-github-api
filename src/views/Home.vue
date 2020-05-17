<template>
  <v-container grid-list-lg>
    <v-layout
      row
      wrap
    >
      <v-flex
        v-for="(column, key) in columns"
        :key="key"
        xs12
        md6
        lg4
      >
        <component :is="column" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import UserList from '@/components/UserList'
import OrganizationList from '@/components/OrganizationList'
import ReposList from '@/components/ReposList'

export default {
  name: 'Home',
  components: {
    UserList,
    OrganizationList,
    ReposList
  },
  data: () => ({
    columns: {
      OrganizationList,
      UserList,
      ReposList
    }
  })
}
</script>
