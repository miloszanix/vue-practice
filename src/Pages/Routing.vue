<script setup lang="ts">
import { ref } from "vue";
import Block from '@/Components/Block.vue';

import type { Ref } from "vue";

const isPlaying: Ref<boolean> = ref(false);
const delay: Ref<number> = ref(0);

const start = (): void => {
  delay.value = 2000 + Math.random() * 5000;
  isPlaying.value = true;
};
</script>

<template>
    <button @click="start" :disabled="isPlaying">Play</button>
    <Block v-if="isPlaying" :delay="delay" />
</template>