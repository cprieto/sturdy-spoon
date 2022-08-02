<script setup lang="ts">
defineEmits<{
    (e: 'pressed', note: number): void;
}>();
</script>

<template>
  <!-- Piano goes here -->
  <div class="block board is-justify-content-center">
    <input class="key white" type="button" @click="$emit('pressed', 36)" />
    <input class="key black" type="button" @click="$emit('pressed', 37)"/>
    <input class="key white" type="button" @click="$emit('pressed', 38)"/>
    <input class="key black" type="button" @click="$emit('pressed', 39)"/>
    <input class="key white" type="button" @click="$emit('pressed', 40)"/>

    <input class="key white" type="button" @click="$emit('pressed', 41)"/>
    <input class="key black" type="button" @click="$emit('pressed', 42)"/>
    <input class="key white" type="button" @click="$emit('pressed', 43)"/>
    <input class="key black" type="button" @click="$emit('pressed', 44)"/>
    <input class="key white" type="button" @click="$emit('pressed', 45)"/>
    <input class="key black" type="button" @click="$emit('pressed', 46)"/>
    <input class="key white" type="button" @click="$emit('pressed', 47)"/>

    <input class="key white" type="button" @click="$emit('pressed', 48)" />
    <input class="key black" type="button" @click="$emit('pressed', 49)" />
    <input class="key white" type="button" @click="$emit('pressed', 50)" />
    <input class="key black" type="button" @click="$emit('pressed', 51)" />
    <input class="key white" type="button" @click="$emit('pressed', 52)" />

    <input class="key white" type="button" @click="$emit('pressed', 53)" />
    <input class="key black" type="button" @click="$emit('pressed', 54)" />
    <input class="key white" type="button" @click="$emit('pressed', 55)" />
    <input class="key black" type="button" @click="$emit('pressed', 56)" />
    <input class="key white" type="button" @click="$emit('pressed', 57)" />
    <input class="key black" type="button" @click="$emit('pressed', 58)" />
    <input class="key white" type="button" @click="$emit('pressed', 59)" />

    <input class="key white" type="button" @click="$emit('pressed', 60)" />
    <input class="key black" type="button" @click="$emit('pressed', 61)" />
    <input class="key white" type="button" @click="$emit('pressed', 62)" />
    <input class="key black" type="button" @click="$emit('pressed', 63)" />
    <input class="key white" type="button" @click="$emit('pressed', 64)" />

    <input class="key white" type="button" @click="$emit('pressed', 65)" />
    <input class="key black" type="button" @click="$emit('pressed', 66)" />
    <input class="key white" type="button" @click="$emit('pressed', 67)" />
    <input class="key black" type="button" @click="$emit('pressed', 68)" />
    <input class="key white" type="button" @click="$emit('pressed', 69)" />
    <input class="key black" type="button" @click="$emit('pressed', 70)" />
    <input class="key white" type="button" @click="$emit('pressed', 71)" />
    <input class="key white" type="button" @click="$emit('pressed', 72)" />
  </div>
</template>