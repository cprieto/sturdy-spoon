<script setup lang="ts">
import {getCurrentInstance, provide, ref} from "vue";
import { useTrackerStore } from "@/stores/Tracker";
import {AudioPlayer} from "@/player";
import {Instruments} from "@/stores/Instruments";

const store = useTrackerStore();
const playing = ref(false);

// Loading all sound samples take some time
const internalInstance = getCurrentInstance();
internalInstance?.appContext.config.globalProperties.$Progress.start();
const player = new AudioPlayer(Instruments.map(x => x.id), 'samples/');
//await player.loaded();
internalInstance?.appContext.config.globalProperties.$Progress.finish();

const handlePlay = () => {
    playing.value = true;
    player.playComposition(store.tracks);
}

const handleStop = () => {
    playing.value = false;
}

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