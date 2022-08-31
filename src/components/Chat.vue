<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useChatStore } from '@/stores/Chat';
import { useSessionStore } from "@/stores/Session";

const store = useChatStore();
const session = useSessionStore();

// Set joined message
onMounted(() => {
  store.join(session.nickname);
});

const message = ref("");

const handleSend = () => {
  store.post(session.nickname, message.value);
  message.value = '';
}

</script>
<template>
  <div>
    <div class="field is-grouped block">
      <p class="control is-expanded">
        <input type="text" class="input" placeholder="Message" v-model="message" />
      </p>
      <p class="control">
        <button href="#" class="button is-info" @click="handleSend" :disabled="message.trim() === ''"> Send </button>
      </p>
    </div>

    <textarea class="textarea" rows="10" readonly>{{store.log}}</textarea>
  </div>
</template>