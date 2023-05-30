<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Ref } from 'vue';
import type { Job } from '@/Helpers/Job';

let jobs: Ref<Job[]> = ref([]);

onMounted(() => {
    fetch('http://localhost:3000/jobs')
        .then(res => res.json())
        .then((data: Job[]) => { 
            jobs.value = data;
        })
        .catch(error => console.log(error));
});

</script>

<template>
    <h1>Jobs</h1>
    <br>
    <div>
        <router-link v-for="(job, index) in jobs" :to="{ name: 'JobDetails', params: { id: job.id } }" :key="job.id"
            class="block underline text-blue-700">
            {{ job.title }}
        </router-link>
    </div>
</template>