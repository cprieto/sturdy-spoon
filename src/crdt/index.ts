import { syncedStore, getYjsValue } from "@syncedstore/core";
import { WebrtcProvider } from "y-webrtc";

import type { Composition } from '@/types';

export const store = syncedStore({ composition: [] as Composition});

const doc = getYjsValue(store);
let webrtcProvider: WebrtcProvider | null = null;


export const disconnect = () => {
    if (webrtcProvider) webrtcProvider.disconnect();
}


export const connect = (sessionId: string) => {
    if (webrtcProvider) webrtcProvider.destroy();

    webrtcProvider = new WebrtcProvider(sessionId, doc as any);
    webrtcProvider.connect();
}

