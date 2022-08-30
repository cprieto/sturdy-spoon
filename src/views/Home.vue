<script setup lang="ts">
import {getCurrentInstance, provide, watchEffect} from 'vue';
import * as Tone from 'tone';
import Connection from '@/components/Connection.vue';
import MusicArea from '@/components/MusicArea/MusicArea.vue';
import Piano from '@/components/Piano.vue';
import Chat from '@/components/Chat.vue';

import {useTrackerStore} from '@/stores/Tracker';
import {useSessionStore} from '@/stores/Session';
import {AudioPlayer} from "@/player";
import {Instruments} from "@/stores/Instruments";

const trackerStore = useTrackerStore();

const props = defineProps<{
  sessionId: string
}>();

const sessionStore = useSessionStore();
watchEffect(() => sessionStore.connect(props.sessionId));

// Loading all sound samples take some time
const internalInstance = getCurrentInstance();
internalInstance?.appContext.config.globalProperties.$Progress.start();
const player = new AudioPlayer(Instruments.map(x => x.id), 'samples/');
provide('player', player);
player.loaded().then(() => {
  internalInstance?.appContext.config.globalProperties.$Progress.finish();
});

const handlePianoKey = async (note: string) => {
  if (trackerStore.selected === null) return;
  await Tone.start();

  trackerStore.setNote(note);

}
</script>

<template>
  <!-- Connection area -->
  <Connection/>

  <!-- Music generation area -->
  <MusicArea/>

  <!-- Piano keys -->
  <Piano @pressed="handlePianoKey"/>

  <!-- Chat area -->
  <Chat/>
</template>

