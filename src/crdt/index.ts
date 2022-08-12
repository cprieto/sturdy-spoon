import { syncedStore, getYjsValue } from "@syncedstore/core";
import { WebrtcProvider } from "y-webrtc";

import { Instrument, Track } from '@/types';

export const store = syncedStore({ 
    composition: [] as Track[], 
    messages: [] as string[] 
});

const doc = getYjsValue(store);
let webrtcProvider = new WebrtcProvider('test-connection', doc as any);


export const disconnect = () => {
    webrtcProvider.disconnect();
}

export const connect = (sessionId: string) => {
    webrtcProvider.connect();
}
