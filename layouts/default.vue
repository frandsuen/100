<script setup lang="ts">
import TopView from '~/components/TopView.vue'
import { ideas } from '~/constants/ideas'
import { githubLink } from '~/constants'

const route = useRoute()

const current = computed(() => {
  const current = ideas.find(item => item.no === route.name)
  return current ?? ''
})

const title = computed(() => {
  return `${current.value && current.value.name} App`
})

watchEffect(() => {
  useHead({
    title: title.value,
  })
})

const link = computed(() => current.value ? `${githubLink}/tree/main/pages/${current.value.no}` : githubLink)
</script>

<template>
  <div h-screen flex="~ col">
    <TopView :title="title" />
    <main flex-1>
      <slot />
    </main>
    <Footer :git-link="link" />
  </div>
</template>
