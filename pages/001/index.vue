<script setup lang="ts">
const binaryText = ref('')
const decimalText = ref(0)

// 是否二进制的文本
const isBinary = computed(() => !!binaryText.value.match(/^[0-1]+$/g))

const tips = computed(() => isBinary.value ? 'Here is the decimal (base 10) equivalent:' : 'You can only input 1 or 0')

function onInput(e: Event) {
  const { value } = e.target as HTMLInputElement
  if (isBinary.value)
    decimalText.value = Number.parseInt(value, 2)
}
</script>

<template>
  <div h-full flex="~ items-center col justify-center">
    <h1 text-4xl font-bold>
      Bin2Dec
    </h1>
    <span>Enter a binary number to get a decimal number</span>
    <input v-model="binaryText" bg="white dark:#222" border="3 #222 dark:white " my-4 pa-4 text-xl outline-none type="text" placeholder="请输入二进制的值" @input="onInput($event)">
    <template v-if="binaryText">
      <span mt-3 :class="[isBinary ? 'text-green-500' : 'text-red-500']">{{ tips }}</span>
      <h2 v-if="isBinary" mt-3 text-xl>
        {{ decimalText }}
      </h2>
    </template>
  </div>
</template>

<style scoped>

</style>
