import { createApp } from 'vue'
import App from './App.vue'
import i18n from '@/i18n.js' // i18n ni import qilish
import './assets/main.css'

const app = createApp(App)

app.use(i18n) // Vue ilovasiga i18n ni qo‘shish
app.mount('#app')
