<script setup lang="ts">
import { Frequency } from 'tone';

const emit = defineEmits<{
    (e: 'pressed', note: string): void;
}>();

const handleClick = (id: number) => {
  const freq = Frequency(id, "midi");
  emit('pressed', freq.toNote());
}

</script>

<template>
  <!-- Piano goes here -->
  <div class="block board is-justify-content-center">
    <input class="key white" type="button" @click="handleClick(36)" />
    <input class="key black" type="button" @click="handleClick(37)"/>
    <input class="key white" type="button" @click="handleClick(38)"/>
    <input class="key black" type="button" @click="handleClick(39)"/>
    <input class="key white" type="button" @click="handleClick(40)"/>

    <input class="key white" type="button" @click="handleClick(41)"/>
    <input class="key black" type="button" @click="handleClick(42)"/>
    <input class="key white" type="button" @click="handleClick(43)"/>
    <input class="key black" type="button" @click="handleClick(44)"/>
    <input class="key white" type="button" @click="handleClick(45)"/>
    <input class="key black" type="button" @click="handleClick(46)"/>
    <input class="key white" type="button" @click="handleClick(47)"/>

    <input class="key white" type="button" @click="handleClick(48)" />
    <input class="key black" type="button" @click="handleClick(49)" />
    <input class="key white" type="button" @click="handleClick(50)" />
    <input class="key black" type="button" @click="handleClick(51)" />
    <input class="key white" type="button" @click="handleClick(52)" />

    <input class="key white" type="button" @click="handleClick(53)" />
    <input class="key black" type="button" @click="handleClick(54)" />
    <input class="key white" type="button" @click="handleClick(55)" />
    <input class="key black" type="button" @click="handleClick(56)" />
    <input class="key white" type="button" @click="handleClick(57)" />
    <input class="key black" type="button" @click="handleClick(58)" />
    <input class="key white" type="button" @click="handleClick(59)" />

    <input class="key white" type="button" @click="handleClick(60)" />
    <input class="key black" type="button" @click="handleClick(61)" />
    <input class="key white" type="button" @click="handleClick(62)" />
    <input class="key black" type="button" @click="handleClick(63)" />
    <input class="key white" type="button" @click="handleClick(64)" />

    <input class="key white" type="button" @click="handleClick(65)" />
    <input class="key black" type="button" @click="handleClick(66)" />
    <input class="key white" type="button" @click="handleClick(67)" />
    <input class="key black" type="button" @click="handleClick(68)" />
    <input class="key white" type="button" @click="handleClick(69)" />
    <input class="key black" type="button" @click="handleClick(70)" />
    <input class="key white" type="button" @click="handleClick(71)" />
    <input class="key white" type="button" @click="handleClick(72)" />
  </div>
</template>