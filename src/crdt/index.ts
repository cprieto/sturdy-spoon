import { syncedStore, getYjsValue, Box } from "@syncedstore/core";
import { WebrtcProvider } from "y-webrtc";

import { Composition } from '@/types';

export const store = syncedStore({ 
    composition: [] as Composition,
    messages: [] as Box<string>[]
});

const doc = getYjsValue(store);
let webrtcProvider: WebrtcProvider | null = null;

export const connect = (sessionId: string) => {
    if (webrtcProvider) { webrtcProvider.destroy(); }

    webrtcProvider = new WebrtcProvider(sessionId, doc as any);
    webrtcProvider.connect();
}
