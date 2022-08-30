<script setup lang="ts">
import {Note} from "@/types";

// Events we send
defineEmits<{
  (e: 'selected', entry: { position: number, id: string }): void;
  (e: 'removed', entry: string): void;
}>();

// Required properties
const props = defineProps<{
  id: string;
  name: string;
  notes: Array<Note | undefined>;
  playing: string | null;
}>();

</script>

<template>
  <div class="box columns has-background-light">
    <div class="column is-2">
      <p>{{ name }}</p>
    </div>

    <div class="buttons are-small column m-0">
      <a v-for="(note, index) in notes" href="#" class="button track-item is-size-7"
         :class="{'is-active': note?.time === playing}" :key="index"
         @click="$emit('selected', {position: index, id})">{{ note?.value }}</a>
    </div>

    <!-- TODO: Track actions-->
    <div class="column is-1 buttons">
      <button class="button" title="Remove instrument" @click="$emit('removed', id)">
        <span class="icon is-small">
          <i class="fa-solid fa-trash-can"></i>
        </span>
      </button>
    </div>
  </div>
</template>
