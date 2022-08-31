import { defineStore } from 'pinia';
import { store } from '@/crdt';
import {boxed} from "@syncedstore/core";

export const useChatStore = defineStore('chat', {
    state: () => {
        return { messages: store.messages }
    },
    getters: {
        log: (state) => state.messages.map(x => x).reverse().join('\n')
    },
    actions: {
        join(user: string) {
            const now = new Date();
            this.messages.push(boxed(`${now.toLocaleString()} | ${user} joined.`));
        },
        post(user: string, message: string) {
            const now = new Date();
            this.messages.push(boxed(`${now.toLocaleString()} | ${user}: ${message}`));
        }
    }
});
