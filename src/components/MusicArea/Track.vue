<script setup lang="ts">
import { ref } from "vue"
import type { Ref } from "vue"

// Events we send
defineEmits<{
    (e: 'selected', entry: {note: number, id: string}): void;
    (e: 'removed', entry: string): void;
}>();

// Required properties
const props = defineProps<{
    id: string;
    name: string;
    notes: Array<String | null>;
}>();

</script>

<template>
  <div class="box level has-background-light">
    <div class="level-item level-left">
      <p>{{ name }}</p>
    </div>
    
    <div class="buttons are-small level-item m-0">
      <a v-for="(note, index) in notes"  href="#" class="button track-item is-size-7" :key="index"
      @click="$emit('selected', {note: index, id})">{{ note }}</a>
    </div>

    <!-- TODO: Track actions-->
    <div class="level-item level-right buttons">
      <button class="button" title="Single">
        <span class="icon is-small">
          <i class="fa-solid fa-ear-listen"></i>
        </span>
      </button>

      <button class="button" title="Mute">
        <span class="icon is-small">
          <i class="fa-solid fa-volume-xmark"></i>
        </span>
      </button>
      <button class="button" title="Remove instrument" @click="$emit('removed', id)">
        <span class="icon is-small">
          <i class="fa-solid fa-trash-can"></i>
        </span>
      </button>
    </div>
  </div>
</template>
