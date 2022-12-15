import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import FontAwesomeIcon from "@/utils/fontawesome-icons";

const app = createApp(App)

app.component("FontAwesomeIcon", FontAwesomeIcon)

app.use(router)

app.mount('#app')
