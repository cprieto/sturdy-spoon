<script setup lang="ts">
import { ref } from 'vue';
import { useInstrumentStore } from '@/stores/Instruments';
import type { Ref } from "vue";

const store = useInstrumentStore();

const selection: Ref<string | null> = ref("none");

const emit = defineEmits<{
    (e: 'added', entry: {id: string; name: string;}): void;
}>();

const handleAdd = () => {
    let instrument = store.instrumentById(selection.value!);
    emit('added', instrument);
    selection.value = 'none';
};
</script>

<template>
  <div class="level m-4">
    <div class="field is-grouped level-item level-left">
      <p class="control select">
        <select v-model="selection">
          <option value="none">Add new instrument</option>
          <option v-for="item in store.available" :key="item.id" :value="item.id">{{item.name}}</option>
        </select>
      </p>
      <p class="control">
        <button class="button is-info" @click="handleAdd" :disabled="selection === 'none'">Add</button>
      </p>
    </div>
  </div>
</template>
