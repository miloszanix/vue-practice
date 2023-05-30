<script setup lang="ts">

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