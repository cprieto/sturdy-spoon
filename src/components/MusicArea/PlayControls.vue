<script setup lang="ts">
import {inject, ref} from "vue";
import {useTrackerStore} from "@/stores/Tracker";
import {AudioPlayer} from "@/player";
import * as Tone from "tone";

const store = useTrackerStore();
const playing = ref(false);
const player: AudioPlayer = inject('player')!;

player.onFinish = () => {
  playing.value = false;
  store.playing = null;
}
player.onNote = (note: string) => {
  store.playing = note;
};

const handlePlay = async () => {
  await Tone.start();
  playing.value = true;
  player?.playComposition(store.tracks);
}

const handleStop = () => {
  playing.value = false;
  player?.stopComposition();
  store.playing = null;
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