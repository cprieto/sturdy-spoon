export interface Instrument {
    id: string;
    name: string;
}

export interface Track extends Instrument {
    notes: Array<string | null>;
}

export type Composition = Track[];
