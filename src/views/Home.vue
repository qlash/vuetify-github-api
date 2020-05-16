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

export default {
  name: 'Home',
  components: {
    UserList,
    OrganizationList
  },
  data: () => ({
    columns: {
      OrganizationList,
      UserList
    }
  })
}
</script>
