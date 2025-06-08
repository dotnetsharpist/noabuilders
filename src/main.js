import { createApp } from 'vue'
import App from './App.vue'
import i18n from '@/i18n.js' // i18n ni import qilish
import './assets/main.css'
import naive from 'naive-ui'
import router from './router'
const app = createApp(App)
app.use(router) // Router ni Vue ilovasiga qo‘shish
app.use(naive)
app.use(i18n) // Vue ilovasiga i18n ni qo‘shish
app.mount('#app')
