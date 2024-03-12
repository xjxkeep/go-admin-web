import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import pinia from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:svg-icons-register'
import SvgIcon from './components/SvgIcon/Index.vue'
const app=createApp(App)
app.component('svg-icon',SvgIcon)
app.use(router).use(pinia).use(ElementPlus).mount('#app')
