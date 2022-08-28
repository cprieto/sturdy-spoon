<script setup lang="ts">
import * as Tone from "tone";

const handlePlay = async () => {
    if (Tone.Transport.state !== "started") {
        await Tone.start();
        Tone.Transport.start();
    }
}

</script>
<template>
<button @click="handlePlay">Play</button>
</template>