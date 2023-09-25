<script setup lang="ts">
interface Line {
  index: number
  height: string
}

// 毫秒
const m = ref(0)
const time = ref()
const line = ref<Line[]>([]) // 线的数量

for (let i = 0; i < 100; i++) {
  line.value.push({
    index: i,
    height: '1rem',
  })
}

const r = 100 // 圆的大小
// 循环线的样式
function clockline(index: number) {
  const total = line.value.length
  const radian = (360 / total) * (Math.PI / 180) * (index - total / 4) // 将起点设置为12点方向
  const angle = (360 / total) * index
  const x = `${r * Math.cos(radian)}px`
  const y = `${r * Math.sin(radian)}px`
  return {
    transform: `translate(${x},${y}) rotate( ${angle}deg)`,
    transition: 'height .1s',
  }
}
// 线的长度
function clocklineStyle(index: number) {
  const height = line.value[index].height
  return {
    height,
  }
}
function start() {
  stop()
  time.value = setInterval(() => {
    const index = (m.value / 10) % 100
    m.value += 10

    line.value[index].height = '2rem'

    // 找之前的
    if (index - 3 >= 0)
      line.value[index - 3].height = '1rem'
    else
      line.value[line.value.length - index - 1].height = '1rem'
  }, 10)
}

function stop() {
  clearInterval(time.value)
}
onUnmounted(() => {
  stop()
})

const timeS = computed(() => {
  const minutes = Math.floor(m.value % 3600000 / 60000).toString().padStart(2, '0')
  const seconds = Math.floor(m.value % 60000 / 1000).toString().padStart(2, '0')
  const millisecond = Math.floor(m.value % 1000 / 100)
  return `${minutes} : ${seconds} . ${millisecond}`
})
</script>

<template>
  <div flex="~ justify-center items-center" h-full>
    <div h-300px flex="~ items-center">
      <div relative h-full w-300px>
        <ul absolute-a pa-8>
          <li v-for="(item, index) in line" :key="index" :style="[clockline(index), clocklineStyle(index)]" absolute-a m-a w-1px bg-gray-5 />
        </ul>
        <div absolute-a flex-center>
          {{ timeS }}
        </div>
      </div>
      <div>
        <button mr-5 @click="start">
          开始
        </button>
        <button @click="stop">
          停止
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
