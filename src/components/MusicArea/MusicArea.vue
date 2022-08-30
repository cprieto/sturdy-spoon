<script setup lang="ts">
import Track from './Track.vue';
import AddInstrument from './AddInstrument.vue';
import PlayControls from './PlayControls.vue';

import {useTrackerStore} from "@/stores/Tracker";

const store = useTrackerStore();

const handleAdded = (instrument: { id: string; name: string }) => {
  store.addInstrument(instrument);
};

const handleSelectedNote = (entry: { position: number, id: string }) => {
  store.select(entry);
}
</script>

<template>
  <div class="block box">
    <!-- Play buttons -->
    <PlayControls/>

    <!-- Start instrument track -->
    <Track
        v-for="instrument in store.tracks"
        :key="instrument.id"
        @selected="handleSelectedNote"
        :id="instrument.id"
        :name="instrument.name"
        :notes="instrument.notes"
        :playing="store.playing"
        @removed="store.removeInstrument"
    />

    <!-- Add new instrument -->
    <AddInstrument @added="handleAdded"/>
  </div>
</template>