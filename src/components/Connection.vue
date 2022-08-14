<script setup lang="ts">
import { ref } from 'vue';
import useClipboard from 'vue-clipboard3';
import { useSessionStore } from '@/stores/Session';
import { connect } from '@/crdt';

const store = useSessionStore();
connect(store.sessionId);

const showModal = ref(false);

const handleCopy = async () => {
  const { toClipboard } = useClipboard();
   try {
    await toClipboard('hola mundo');
   } catch {
    console.error('oops!');
   }
}

</script>

<template>

  <div class="modal" :class="{ 'is-active': showModal }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Share your composition</p>
        <button class="delete" aria-label="close" @click="showModal = false"></button>
      </header>
      <section class="modal-card-body">
        <div class="field">
          <p class="control has-icons-right">
            <input type="text" class="input" readonly="true" value="hello wife I love you!" @click="handleCopy">
            <span class="icon is-small is-right">
              <i class="fas fa-copy"></i>
            </span>
          </p>
        </div>
        <p>
          Just share this URL with a friend, so they can contribute in real time with your composition.
        </p>
      </section>
      <footer class="modal-card-foot">
      </footer>
    </div>
  </div>

  <div class="level block">
    <div class="field is-grouped">
      <p class="control">
        <a href="#" class="button is-info" @click="showModal = true">Share session</a>
      </p>
    </div>

    <div class="field">
      <p class="control">
        <input type="text" class="input" placeholder="username" v-model="store.nickname" :readonly="true" />
      </p>
    </div>
  </div>
</template>