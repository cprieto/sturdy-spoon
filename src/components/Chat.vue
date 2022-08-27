<script setup lang="ts">
import { ref } from "vue";

const message = ref("");

</script>
<template>
  <div>
    <div class="field is-grouped block">
      <p class="control is-expanded">
        <input type="text" class="input" placeholder="Message" v-model="message" />
      </p>
      <p class="control">
        <a href="#" class="button is-info"> Send </a>
      </p>
    </div>

    <textarea class="textarea" rows="10" readonly>
    </textarea>
  </div>
</template>