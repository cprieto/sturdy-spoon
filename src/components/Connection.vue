<script setup lang="ts">
import { useSessionStore } from '@/stores/Session.js';

const store = useSessionStore();

</script>

<template>
  <div class="level block">
    <div class="field is-grouped">
      <p class="control is-expanded">
        <input type="text" class="input" placeholder="Session id" v-model="store.sessionId" />
      </p>
      <p class="control">
        <a href="#" class="button is-info">Join</a>
      </p>
    </div>

    <div class="field">
      <p class="control">
        <input type="text" class="input" placeholder="username" 
          v-model="store.nickname" :readonly="true" />
      </p>
    </div>
  </div>
</template>