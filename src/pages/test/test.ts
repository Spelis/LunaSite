import { createApp } from 'vue'
import App from './Test.vue'
import Navbar from '../../components/navbar.vue'
import '../../assets/main.css'

const app = createApp(App)

app.component('navbar', Navbar)

app.mount('#app')
