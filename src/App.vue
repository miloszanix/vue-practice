<script setup lang="ts">
const title: string = "This is title";
const author: string = "Milos Ursulovic";
const age: number = 27;
</script>

<template>
  <h1 className="text-3xl font-bold underline">
    {{ title }} - {{ author }} - {{ age }}
  </h1>
</template>