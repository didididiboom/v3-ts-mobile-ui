import { createApp } from 'vue';
import App from './App.vue';
import '@/style/index.scss';
import router from './router';
import c3MUv3 from '@/c3MUv3';
// import '@/../lib/style.css';
import '@/utils/touch';

createApp(App).use(router).use(c3MUv3).mount('#app');
