import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.mount("#app");

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
