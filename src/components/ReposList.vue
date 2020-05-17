<template>
  <ColumnList
    :list="list"
    title="Repos list"
    class="repository"
  >
    <template v-if="list">
      <ColumnListItem
        v-for="repo in liste"
        :key="repo.id"
        class="repository__element"
      >
        <v-card-title class="repository__title">
          {{ repo.full_name }}
        </v-card-title>

        <ul class="repository__list">
          <li
            v-for="(value, key) in repo"
            :key="key"
            class="repository__list__item"
          >
            <span class="repository__list__item--key">{{ key }}:</span>
            <span class="repository__list__item--value">
              <template v-if="key === 'last_commit_date'">
                {{ value | datetime }}
              </template>
              <template v-else>
                {{ value }}
              </template>
            </span>
          </li>
        </ul>
      </ColumnListItem>
    </template>
  </ColumnList>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import ColumnList from './ColumnList'
import ColumnListItem from './ColumnListItem'

export default {
  components: {
    ColumnList,
    ColumnListItem
  },
  computed: {
    ...mapState('repos', ['list']),
    ...mapGetters({
      liste: 'repos/sortedList'
    })
  },
  methods: {
    ...mapActions({
      get: 'repos/get'
    })
  },
  mounted () {
    this.get()
  }
}
</script>

<style lang="scss">
$item-padding: .2rem;

.repository {
  &__element {
    background: #eee !important;
  }

  &__title {
    color: blue;
  }

  &__list {
    list-style-type: square;
    padding-bottom: 1rem;

    &__item {
      margin-left: 1rem;
      padding-top: $item-padding;
      padding-bottom: $item-padding;

      &--key {
        font-weight: bold;
      }

      &--value {
        font-style: italic;
      }
    }
  }
}
</style>
