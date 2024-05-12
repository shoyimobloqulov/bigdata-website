import "@/assets/custom/crbase6067/css/chosen.min.css"
import "@/assets/custom/crbase6067/css/style.css"
import "@/assets/custom/crbase6067/css/style23.css"
import "@/assets/custom/crbase6067/css/style23.css"
import "@/assets/js/timepicker.js"
import "@/assets/js/main.js"
import "@/assets/js/jquery.scrollTo.min.js"
import "@/assets/js/jquery.touchSwipe.min.js"
import "@/assets/custom/crbase6067/js/custom.js"

import { createApp } from 'vue'
import App from './components/App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
