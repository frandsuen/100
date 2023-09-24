<script setup lang="ts">
import { ideas } from '~/constants/ideas'

const availableIdeas = ideas.filter(i => !i?.draft)

definePageMeta({
  layout: 'home',
})
</script>

<template>
  <div w-2xl>
    <h1 font-bold>
      100 Apps
    </h1>
    <div mt-5 grid="~ cols-3" gap-2>
      <nuxt-link v-for="(item, index) in availableIdeas" :key="index" :to="item.no">
        <span text-gray-5>{{ item.no }}</span>
        {{ item.name }}
      </nuxt-link>
    </div>
  </div>
</template>
