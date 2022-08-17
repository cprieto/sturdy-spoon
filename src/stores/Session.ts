import { defineStore } from 'pinia';
import { useRoute } from 'vue-router';
import generate from 'project-name-generator';
import { nanoid } from 'nanoid'

const route = useRoute();

export const useSessionStore = defineStore('session', {
    state: () => {
        return { sessionId: '', nickname: generate().dashed }
    },
});
