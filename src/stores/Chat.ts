import { defineStore } from 'pinia';
import { store } from '@/crdt';

export const useChatStore = defineStore('chat', {
    state: () => {
        return { messages: store.messages }
    },
    getters: {
        history: (state) => {
            state.messages.join('\n');
        }
    }
});
