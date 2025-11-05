<script setup>
import * as echarts from 'echarts'
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  cpu: Number,
  ram: Number,
})

let chart = null
const chartRef = ref(null)

onMounted(() => {
  chart = echarts.init(chartRef.value)

  chart.setOption({
    title: { text: 'CPU & RAM Usage', left: 'center' },
    tooltip: { trigger: 'axis' },
    legend: { bottom: 0 },
    xAxis: { type: 'category', data: [] },
    yAxis: { type: 'value', max: 100 },
    series: [
      { name: 'CPU %', type: 'line', data: [], smooth: true, areaStyle: {} },
      { name: 'RAM %', type: 'line', data: [], smooth: true, areaStyle: {} },
    ],
  })
})

watch([() => props.cpu, () => props.ram], ([cpu, ram]) => {
  if (!chart) return

  const option = chart.getOption()

  option.xAxis[0].data.push(new Date().toLocaleTimeString())
  option.series[0].data.push(cpu)
  option.series[1].data.push(ram)

  if (option.xAxis[0].data.length > 10) {
    option.xAxis[0].data.shift()
    option.series[0].data.shift()
    option.series[1].data.shift()
  }

  chart.setOption(option)
})
</script>

<template>
  <div ref="chartRef" style="height: 300px; width: 100%"></div>
</template>
