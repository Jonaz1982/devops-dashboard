import { createApp } from 'vue'
import App from './App.vue'
import VueComponentsPlaywrightLib from 'devops-dashboard-components'

const app = createApp(App)
app.use(VueComponentsPlaywrightLib)
app.mount('#app')
