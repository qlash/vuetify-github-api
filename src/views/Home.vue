<template>
  <div class="home">
    <OrganizationList />
  </div>
</template>

<script>
// import UserList from '@/components/UserList'
import OrganizationList from '@/components/OrganizationList'

export default {
  name: 'Home',
  components: {
    // UserList,
    OrganizationList
  }
}
</script>
