<script setup lang="ts">
import { onMounted, watchEffect } from 'vue';
import Connection from '@/components/Connection.vue';
import MusicArea from '@/components/MusicArea/MusicArea.vue';
import Piano from '@/components/Piano.vue';
import Chat from '@/components/Chat.vue';

import { useTrackerStore } from '@/stores/Tracker';
import { useSessionStore } from '@/stores/Session';
import { store } from '@/crdt';

const trackerStore = useTrackerStore();

const props = defineProps<{
    sessionId: string
}>();

const sessionStore = useSessionStore();
watchEffect(() => sessionStore.sessionId = props.sessionId);

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

