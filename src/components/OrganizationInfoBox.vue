<template>
  <v-flex
    xs4
    class="text-center align-self-end"
  >
    <v-progress-circular
      v-if="counter === null"
      indeterminate
    />
    <div
      v-else
      class="subtitle-2"
    >
      {{ counter }}
    </div>
    <div class="caption">
      {{ title }}
    </div>
  </v-flex>
</template>

<script>
export default {
  props: {
    counter: [Number, String],
    title: String
  }
}
</script>
