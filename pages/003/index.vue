<script setup lang="ts">
// 毫秒
const m = ref(0)
const time = ref()
const lineTotal = 100 // 线的数量
const r = 100 // 圆的大小
// 循环线的样式
function clockline(index: number) {
  const radian = (360 / lineTotal) * (Math.PI / 180) * index
  const angle = 450 + (360 / lineTotal) * index
  const x = `${r * Math.cos(radian)}px`
  const y = `${r * Math.sin(radian)}px`
  return {
    transform: `translate(${x},${y}) rotate( ${angle}deg)`,
  }
}
// TODO 保存当前的 height 到数组
// 线的长度
function clocklineHeight(index: number) {
  const height = index === 0 ? '1rem' : '2rem'
  return {
    height,
  }
}

function start() {
  time.value = setInterval(() => {
    m.value += 100
  }, 100)
}
</script>

<template>
  <div flex="~ justify-center items-center" h-full>
    <div h-300px flex="~ items-center">
      <div relative h-full w-300px>
        <ul absolute-a bg-gray-1 pa-8>
          <li v-for="(item, index) in lineTotal" :key="index" :style="[clockline(index), clocklineHeight(index)]" absolute-a m-a w-1px bg-gray-5 />
        </ul>
        <div absolute-a flex-center>
          {{ m }}
        </div>
      </div>
      <div>
        <button @click="start">
          开始
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
