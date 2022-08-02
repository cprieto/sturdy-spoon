import { defineStore } from 'pinia';
import { Instrument } from './Instruments';

export interface Track {
    id: string;
    name: string;
    notes: Array<string | null>;
}

export const useTrackerStore = defineStore('tracker', {
    state: () => {
        return {
            tracks: [] as Track[]
        }
    },
    actions: {
        addInstrument(instrument: Instrument) {
            this.tracks.push({...instrument, notes: Array(16)})
        }
    }
});
