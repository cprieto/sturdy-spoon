import { defineStore } from 'pinia';
import * as _ from 'lodash';
import { Instrument, useInstrumentStore } from './Instruments';

export interface Track {
    id: string;
    name: string;
    notes: Array<string | null>;
}

export const useTrackerStore = defineStore('tracker', {
    state: () => {
        return {
            tracks: [] as Track[],
            selected: null as {id: string; note: number} | null,
        }
    },
    actions: {
        addInstrument(instrument: Instrument) {
            this.tracks.push({...instrument, notes: Array(16)});
        },
        removeInstrument(id: string) {
            if (this.selected?.id == id) this.selected == null;

            const idx = this.tracks.findIndex(e => e.id == id);
            this.tracks.splice(idx, 1);
        },
        select(entry: {id: string, note: number}) {
            this.selected = entry;
        },
        setNote(note: string) {
            if (!this.selected) return;

            let track = this.tracks.find(t => t.id === this.selected!.id);
            if (!track) return;

            track.notes[this.selected.note] = note;

            console.log(this.tracks);
        },
        random(num: number = 3) {
            const store = useInstrumentStore();
            let instruments = _.sampleSize(store.all, 3).map(({id, name}) => {
                let notes = Array(16);
                return {id, name, notes};
            });
            
            this.tracks = instruments;
        }
    }
});
