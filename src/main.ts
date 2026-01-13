import { createApp } from 'vue'
import './style.css'
// @ts-ignore
import App from './App.vue'
import router from './router/index'
import '@glidejs/glide/dist/css/glide.core.min.css'

const app = createApp(App)

app.use(router)
app.mount('#app')
