<script setup lang="ts">
    import { ref } from 'vue';
    import type { Ref } from 'vue';
    import Tracker from '@/components/Tracker.vue';
    import Piano from '@/components/Piano.vue';
    import AddInstrument from '@/components/AddInstrument.vue';

    const handleSelectedNote = (index: number) => {
        console.log(index);
    }

    const handlePianoKey = (note: number) => {
        console.log(`Piano key: ${note}`);
    }

    const handleAdded = (instrument: {id: string; name: string}) => {
        console.log(`added instrument ${instrument.id}`)
    }

    interface Instrument {
        id: number,
        name: String;
        notes: Array<string | null>;
    }

    const instruments: Ref<Array<Instrument>> = ref([
        {id: 1, name: "Sample 1", notes: Array(16)},
        {id: 2, name: "Sample 2", notes: Array(16)},
        {id: 3, name: "Sample 3", notes: Array(16)},
    ]);

</script>

<template>
  <section class="section">
    <h1 class="title">Collaborative P2P music tracker</h1>

    <div class="level block">
        <div class="field is-grouped">
            <p class="control is-expanded">
                <input type="text" class="input" placeholder="Session id">
            </p>
            <p class="control">
                <a href="#" class="button is-info">
                    Join
                </a>
            </p>
        </div>

        <div class="field">
            <p class="control">
                <input type="text" class="input" placeholder="username">
            </p>
        </div>
    </div>

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
        <Tracker v-for="instrument in instruments" :key="instrument.id"
            @selected="handleSelectedNote" :instrument="instrument.name"
            :notes="instrument.notes" />

        <!-- Add new instrument -->
        <AddInstrument @added="handleAdded" />

    </div>

    <!-- Piano keys -->
    <Piano @pressed="handlePianoKey" />

    <!-- Chat area -->
    <div>
        <div class="field is-grouped block">
            <p class="control is-expanded">
                <input type="text" class="input" placeholder="Message">
            </p>
            <p class="control">
                <a href="#" class="button is-info">
                    Send
                </a>
            </p>
        </div>

        <textarea class="textarea" rows="10" readonly></textarea>
    </div>
  </section>
</template>
