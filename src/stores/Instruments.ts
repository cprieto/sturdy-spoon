import { defineStore } from 'pinia';
import { readonly } from 'vue';

export interface Instrument {
    id: string;
    name: string;
}

export const Instruments: Array<Instrument> = [
    ['piano', 'Piano'], ['bass-electric', 'Electric bass'],
    ['bassoon', 'Basoon'], ['cello', 'Cello'], ['clarinet', 'Clarinet'],
    ['contrabass', 'Contrabass'], ['flute', 'Flute'], ['french-horn', 'French horn'],
    ['guitar-acoustic', 'Acoustic guitar'], ['guitar-electric', 'Electric guitar'],
    ['guitar-nylon', 'Nylon guitar'], ['harmonium', 'Harmonium'],
    ['harp', 'Harp'], ['organ', 'Organ'], ['saxophone', 'Saxophone'],
    ['trombone', 'Trombone'], ['trumpet', 'Trumpet'], ['tuba', 'Tuba'],
    ['violin', 'Violin'], ['xylophone', 'Xylophone']].map(([id, name]) => { return { id, name } });

export const useInstrumentStore = defineStore('instruments', {
    state: () => {
        return { all: readonly(Instruments) }
    },
    getters: {
        available: (state) => {
            return state.all
        },
        instrumentById: (state) => {
            return (id: string) => state.all.find(inst => inst.id == id)!;
        }
    }
});