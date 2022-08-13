<script setup lang="ts">
import * as _ from "lodash";
import { ref } from "vue";
import { Note } from '@/types';
import { store } from '@/crdt';

const message = ref("");

const addMessage = () => {
  let notes: Array<{value: string}> = Array(16);
  _.fill(notes, {value: 'A'});

  let track = {id: 'foo', name: 'bar', notes};
  store.composition.push(track);
}

const changeMessage = () => {
  let track = _.sample(store.composition);
  if (!track) return;

  const idx = 10;
  let note = track.notes[idx];
  console.log(note!.value = 'B');
}

</script>
<template>
  <div>
    <div class="field is-grouped block">
      <p class="control is-expanded">
        <input type="text" class="input" placeholder="Message" v-model="message" />
      </p>
      <p class="control">
        <a href="#" class="button is-info" @click="addMessage"> Add </a>
        <a href="#" class="button is-info" @click="changeMessage"> Change </a>
      </p>
    </div>

    <textarea class="textarea" rows="10" readonly>
      {{store.composition}}
    </textarea>
  </div>
</template>