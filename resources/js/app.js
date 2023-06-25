import { createApp } from 'vue'
import NeoCard from './components/NeoCard.vue'
import App from './App.vue'
import router from './route.js'

const app = createApp(App)
app.component('NeoCard', NeoCard)

app.use(router).mount('#app')
