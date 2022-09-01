import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/Home.vue';
import { nanoid } from 'nanoid';

const routes = [
    {path: '/', name: 'Home', component: Home, strict: true, props: {sessionId: nanoid()}},
    {path: '/j/:sessionId', name: 'Join', component: Home, props: true},
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
