<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import type { Ref } from 'vue';

const route = useRoute();

const id: Ref<string | string[]> = ref(route.params.id);

</script>

<template>
    <h1>Job Details Page</h1>
    <br>
    <p>The job id is {{ id }}</p>
</template>