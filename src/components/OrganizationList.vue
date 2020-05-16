<template>
  <ColumnList
    :list="list"
    :title="'Organizations list'"
  >
    <template v-if="list">
      <ColumnListItem
        v-for="org in list"
        :key="org.id"
      >
        <v-list-item>
          <v-list-item-avatar>
            <v-img :src="org.avatar_url" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              {{ org.login }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-container>
          <v-row>
            <OrganizatioInfoBox
              :counter="org.followers"
              title="Followers"
            />
            <OrganizatioInfoBox
              :counter="org.repos"
              title="Public repos"
            />
            <OrganizatioInfoBox
              :counter="org.created | datetime"
              title="Created"
            />
          </v-row>
        </v-container>
      </ColumnListItem>
    </template>
  </ColumnList>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ColumnList from './ColumnList'
import ColumnListItem from './ColumnListItem'
import OrganizatioInfoBox from './OrganizationInfoBox'

export default {
  name: 'OrganizationList',
  components: {
    ColumnList,
    ColumnListItem,
    OrganizatioInfoBox
  },
  computed: {
    ...mapState('organizations', ['list'])
  },
  methods: {
    ...mapActions({
      get: 'organizations/get'
    })
  },
  beforeMount () {
    this.get()
  }
}
</script>
