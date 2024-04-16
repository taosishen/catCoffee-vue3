import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

/* ant-design-vue */
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

/* Router */
import {router} from './router'

/* pinia */
import pinia from './store/store';

/* axios */
import { axiosService } from './axios';

const app = createApp(App);
app.config.globalProperties.$http = axiosService;
app.use(Antd);
app.use(router);
app.use(pinia);


app.mount('#app')
