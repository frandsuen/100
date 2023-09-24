<script setup lang="ts">
import TopView from '~/components/TopView.vue'
import { ideas } from '~/constants/ideas'

const route = useRoute()

const title = computed(() => {
  const current = ideas.find(item => item.no === route.name)
  if (current)
    return `${current.name} App`

  return ''
})

watchEffect(() => {
  useHead({
    title: title.value,
  })
})
</script>

<template>
  <div h-screen flex="~ col">
    <TopView :title="title" />
    <main flex-1>
      <slot />
    </main>
    <Footer />
  </div>
</template>
