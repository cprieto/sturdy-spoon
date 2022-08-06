import { defineStore } from 'pinia';
import generate from 'project-name-generator';
import { nanoid } from 'nanoid'


export const useSessionStore = defineStore('session', {
    state: () => {
        return { sessionId: nanoid(), nickname: generate().dashed }
    },
});
