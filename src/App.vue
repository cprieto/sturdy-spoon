<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';

import Connection from '@/components/Connection.vue';
import MusicArea from '@/components/MusicArea/MusicArea.vue';
import Piano from '@/components/Piano.vue';
import Chat from '@/components/Chat.vue';

import { useTrackerStore } from '@/stores/Tracker';
import { useSessionStore } from './stores/Session';

const trackerStore = useTrackerStore();
//trackerStore.random();

const handlePianoKey = (key: string) => trackerStore.setNote(key);
</script>

<template>
  <section class="section">
    <h1 class="title">Collaborative P2P music tracker</h1>

    <!-- Connection area -->
    <Connection />

    <!-- Music generation area -->
    <MusicArea />

    <!-- Piano keys -->
    <Piano @pressed="handlePianoKey" />

    <!-- Chat area -->
    <Chat />
  </section>
</template>
