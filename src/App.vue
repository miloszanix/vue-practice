<script setup lang="ts">

import { ref } from 'vue';
import type { Ref } from 'vue';

const title: string = "This is title";
const author: string = "Milos Ursulovic";
const age: number = 27;

let showBooks: Ref<boolean> = ref(false);

const toggleShowBooks = () => showBooks.value = !showBooks.value;

</script>

<template>
  <h1 v-if="showBooks" className="text-3xl font-bold underline">
    {{ title }} - {{ author }} - {{ age }}
  </h1>
  <button @click="toggleShowBooks">
    <span v-if="showBooks">Hide books</span>
    <span v-else>Show books</span>
  </button>
</template>