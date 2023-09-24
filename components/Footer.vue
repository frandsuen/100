<script setup lang="ts">
import { githubLink } from '~/constants'

const props = defineProps<{
  gitLink?: string
}>()

const link = computed(() => props.gitLink || githubLink)
</script>

<template>
  <div m-4xl text-xl flex="~ col items-center">
    <div text=" gray4" flex="~ gap3" items-center>
      <NuxtLink to="https://github.com/sunpm" target="_blank">
        @sunpm
      </NuxtLink>
      <NuxtLink i-carbon-campsite to="/" />
      <NuxtLink i-carbon-logo-github :to="link" target="_blank" />
      <DarkToggle />
    </div>
    <div text-gray-5>
      from 2023/09/23
    </div>
  </div>
</template>
