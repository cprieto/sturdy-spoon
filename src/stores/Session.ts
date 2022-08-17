import { defineStore } from 'pinia';
import { connect } from '@/crdt';
import generate from 'project-name-generator';

export const useSessionStore = defineStore('session', {
    state: () => {
        return { sessionId: '', nickname: generate().dashed }
    },
    actions: {
        connect(sessionId: string) {
            this.sessionId = sessionId;
            connect(sessionId);
        }
    }
});
