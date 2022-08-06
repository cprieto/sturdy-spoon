import * as Vue from 'vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { enableVueBindings } from "@syncedstore/core";
import './index.scss';
import App from './App.vue';


enableVueBindings(Vue);

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount('#app');
