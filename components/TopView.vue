<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <NuxtLink to="/">
    <header relative pa-xl text-center text-2xl font-bold>
      {{ title }}
      <span i-carbon-chevron-left absolute left-xl class="translate-y-[-50%]" top="50%" />
    </header>
  </NuxtLink>
</template>

<style scoped>

</style>
