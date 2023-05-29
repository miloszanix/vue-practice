<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  score: {
    type: Number,
    required: true,
  },
});
</script>


<template>
    <p>Reaction time: {{ score }} ms</p>
</template>