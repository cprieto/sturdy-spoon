<script setup lang="ts">
import Track from './Track.vue';
import AddInstrument from './AddInstrument.vue';

import { useTrackerStore } from "@/stores/Tracker";

const store = useTrackerStore();

const handleAdded = (instrument: { id: string; name: string }) => {
  store.addInstrument(instrument);
};

const handleSelectedNote = (entry: {note: number, id: string}) => {
    store.select(entry);
}
</script>

<template>
  <div class="block box">
    <!-- Play buttons -->
    <div class="level">
      <div class="buttons level-item level-left">
        <button class="button" title="Start playing">
          <span class="icon is-small">
            <i class="fa-solid fa-play"></i>
          </span>
        </button>

        <button class="button" title="Stop playing">
          <span class="icon is-small">
            <i class="fa-solid fa-stop"></i>
          </span>
        </button>
      </div>
    </div>

    <!-- Start instrument track -->
    <Track
      v-for="instrument in store.tracks"
      :key="instrument.id"
      @selected="handleSelectedNote"
      :id="instrument.id"
      :name="instrument.name"
      :notes="instrument.notes"
      @removed="store.removeInstrument"
    />

    <!-- Add new instrument -->
    <AddInstrument @added="handleAdded" />
  </div>
</template>