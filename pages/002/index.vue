<script setup lang="ts">
const rangeLists = ['top', 'right', 'bottom', 'left'] as const
function getPosition(position: typeof rangeLists[number]) {
  if (position === 'top')
    return 'left--2 top--2'
  else if (position === 'left')
    return 'left-[calc(-50%-0.5rem)] top-[calc(50%-0.5rem)] rotate-90'
  else if (position === 'right')
    return 'right-[calc(-50%-0.5rem)] top-[calc(50%-0.5rem)] rotate-90'
  else
    return 'left--2 bottom--2'
}
</script>

<template>
  <div flex="~ justify-center items-center" h-full>
    <div relative h-40vmin w-40vmin border="2 dashed gray-5">
      <div h-full w-full class="generator" />
      <input v-for="(item, index) in rangeLists" :key="index" absolute :class="[getPosition(item)]" class="w-[calc(100%+1rem)]" appearance-none bg-transparent type="range" min="0" max="100">
    </div>
  </div>
</template>

<style scoped>
.generator {
  background: #FF0099;
  background-image: linear-gradient(45deg,#3023AE 0%,#FF0099 100%);
}
</style>
