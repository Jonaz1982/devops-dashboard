import { createApp } from 'vue'
import App from './App.vue'
import VueComponentsPlaywrightLib from 'vue-components-playwright'

const app = createApp(App)
app.use(VueComponentsPlaywrightLib)
app.mount('#app')
