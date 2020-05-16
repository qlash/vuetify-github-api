<template>
  <v-card
    :loading="!list"
    class="py-1"
  >
    <v-card-title color="blue">
      {{ title }}
    </v-card-title>

    <slot />
  </v-card>
</template>

<script>
export default {
  props: {
    list: [Array, null],
    title: String
  }
}
</script>
