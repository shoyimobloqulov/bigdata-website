import "@/assets/cache/css/fd0ae04cd69f0b27feb055b1aa73aefb.css"
import "@/assets/cache/css/1d69c2740c77329538e447af9c24a040.css"
import "@/assets/ajax/all.min.css"
import "@/assets/custom/crbase6067/css/chosen.min.css"
import "@/assets/custom/crbase6067/css/style.css"
import "@/assets/custom/crbase6067/css/style23.css"
import "@/assets/custom/crbase6067/css/style23.css"

import { createApp } from 'vue'
import App from './components/App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
