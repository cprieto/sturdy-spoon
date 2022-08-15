import {createRouter, createWebHashHistory} from 'vue-router';
import Home from '@/views/Home.vue';

const routes = [
    {path: '/:sessionId?', name: 'Home', component: Home, sensitive: true},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
