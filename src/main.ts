import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import './style/index.scss';
import c3MUv3 from '@/c3MUv3';

const app = createApp(App);
app.use(c3MUv3);

app.use(router).mount('#app');
