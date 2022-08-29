export interface Instrument {
    id: string;
    name: string;
}

export interface Note {
    value: string | null
    time: string
}

export interface Track extends Instrument {
    notes: Array<Note | undefined>;
}

export type Composition = Track[];
