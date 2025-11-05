import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

// Views
import Logs from './views/Logs.vue'

// Rutas
const routes = [
  { path: '/', component: App },
  { path: '/logs', component: Logs },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
