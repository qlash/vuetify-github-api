<template>
  <v-hover
    class="ma-3"
    v-slot:default="{ hover }"
  >
    <v-card :elevation="hover ? 8 : 2">
      <slot />
    </v-card>
  </v-hover>
</template>
