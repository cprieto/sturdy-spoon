<script setup lang="ts">
import Connection from '@/components/Connection.vue';
import MusicArea from '@/components/MusicArea/MusicArea.vue';
import Piano from '@/components/Piano.vue';
import Chat from '@/components/Chat.vue';

import { useTrackerStore } from '@/stores/Tracker';

const trackerStore = useTrackerStore();
</script>

<template>
    <!-- Connection area -->
    <Connection />

    <!-- Music generation area -->
    <MusicArea />

    <!-- Piano keys -->
    <Piano @pressed="trackerStore.setNote" />

    <!-- Chat area -->
    <Chat />
</template>
