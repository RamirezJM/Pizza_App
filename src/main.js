import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.filters = {
  formatMoney(value){
    return value.toFixed(2)
  },
}

app.use(router)
app.mount('#app')

