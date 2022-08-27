<script setup lang="ts">
import { ref } from "vue";
import { useTrackerStore } from "@/stores/Tracker";
import { Instruments } from "@/stores/Instruments";
import { AudioPlayer } from '@/player';

const store = useTrackerStore();
const playing = ref(false);

const handlePlay = () => {
    playing.value = true;
}

const handleStop = () => {
    playing.value = false;
}

const player = new AudioPlayer(Instruments.map(x => x.id), 'samples/');
console.log('start loading');
await player.loaded();
console.log('loaded!');

</script>
<template>
    <div class="level">
        <div class="buttons level-item level-left">
            <button class="button" title="Start playing" :disabled="playing || store.empty" @click="handlePlay">
                <span class="icon is-small">
                    <i class="fa-solid fa-play"></i>
                </span>
            </button>

            <button class="button" title="Stop playing" :disabled="!playing" @click="handleStop">
                <span class="icon is-small">
                    <i class="fa-solid fa-stop"></i>
                </span>
            </button>
        </div>
    </div>
</template>