<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import type { Ref } from 'vue';
import type { Job } from '@/Helpers/Job';

const route = useRoute();

const id: Ref<string | string[]> = ref(route.params.id);
const job: Ref<Job | null> = ref(null);

onMounted(() => {
    fetch(`http://localhost:3000/jobs/${id.value}`)
        .then(res => res.json())
        .then((data: Job) => {
            job.value = data;
        })
        .catch(error => console.log(error));
});

</script>

<template>
    <h1>Job Details Page</h1>
    <br>
    <p>{{ job?.title }}</p>
    <p>{{ job?.details }}</p>
</template>