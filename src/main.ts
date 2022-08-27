import * as Vue from 'vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { enableVueBindings } from "@syncedstore/core";
import VueProgressBar from "@/components/vue3-progressbar";
import router from '@/routes';
import '@/index.scss';
import App from '@/App.vue';


enableVueBindings(Vue);

const options = {
    color: "#1dbfb7",
    failedColor: "#874b4b",
    thickness: "8px",
    transition: {
      speed: "0.2s",
      opacity: "0.6s",
      termination: 300,
    },
    autoRevert: true,
    location: "top",
    inverse: false,
  };

const pinia = createPinia();

createApp(App)
    .use(VueProgressBar, options)
    .use(pinia)
    .use(router)
    .mount('#app');
