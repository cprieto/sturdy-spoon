import { defineStore } from 'pinia';
import * as _ from 'lodash';
import { Instrument } from '@/types';
import { store } from '@/crdt';
import type { Composition }  from '@/types';


type Selected = {id: string; position: number};

export const useTrackerStore = defineStore('tracker', {
    state: () => {
        return {
            tracks: store.composition as Composition,
            selected: null as Selected | null,
        }
    },
    actions: {
        addInstrument(instrument: Instrument) {
            let notes = Array(16);
            _.fill(notes, {value: ''});
            this.tracks.push({...instrument, notes});
        },
        removeInstrument(id: string) {
            if (this.selected?.id === id) this.selected = null;

            const idx = this.tracks.findIndex(e => e.id === id);
            this.tracks.splice(idx, 1);
        },
        select(entry: {id: string, position: number}) {
            this.selected = entry;
        },
        setNote(note: string) {
            if (!this.selected) return;

            let track = this.tracks.find(t => t.id === this.selected!.id);
            if (!track) return;
            
            let entry = track.notes[this.selected.position];
            if (!entry) return;
            
            entry.value = note;
        }
    },
    getters: {
        empty: (state) => state.tracks.length == 0
    }
});
