<script setup lang="ts">
import { ref } from "vue";
import Block from '@/Components/Block.vue';
import Results from '@/Components/Results.vue';

import type { Ref } from "vue";

const isPlaying: Ref<boolean> = ref(false);
const delay: Ref<number> = ref(0);
const score: Ref<number> = ref(0);
const showResults: Ref<boolean> = ref(false);

const start = (): void => {
  delay.value = 2000 + Math.random() * 5000;
  isPlaying.value = true;
  showResults.value = false;
};

const endGame = (reactionTime: number): void => {
  score.value = reactionTime;
  isPlaying.value = false;
  showResults.value = true;
};
</script>

<template>
    <button @click="start" :disabled="isPlaying">Play</button>
    <Results v-if="showResults" :score="score" />
    <Block v-if="isPlaying" :delay="delay" @end="endGame" />
</template>