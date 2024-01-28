import { createApp } from 'vue'
import "./index.css"
import ElementPlus from 'element-plus';
import App from './App.vue'
const app = createApp(App);
app.use(ElementPlus);
app.mount('#app');
