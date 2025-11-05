<script setup>
import { ref, onMounted } from 'vue'
import { getLogs } from '@/services/logs'

const logs = ref([])

async function loadLogs() {
  logs.value = await getLogs()
}

onMounted(() => {
  loadLogs()
  setInterval(loadLogs, 5000) // Refrescar cada 5s
})
</script>

<template>
  <div class="logs-container">
    <h2>Logs del sistema</h2>
    <pre class="log-box">
      <div v-for="log in logs" :key="log.ts">
        [{{ log.level }}] {{ log.ts }} — {{ log.msg }}
      </div>
    </pre>
  </div>
</template>

<style scoped>
.logs-container {
  padding: 20px;
}
.log-box {
  background: #0a0a0a;
  color: #00ff7f;
  padding: 15px;
  border-radius: 6px;
  height: 350px;
  overflow-y: auto;
  font-size: 14px;
}
</style>
