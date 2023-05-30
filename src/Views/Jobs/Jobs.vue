<script setup lang="ts">
import { reactive } from 'vue';
import type { UnwrapNestedRefs } from 'vue';

type Job = {
    id: number;
    title: string;
    details: string;
};

const jobs: UnwrapNestedRefs<Job[]> = reactive([
    { id: 1, title: 'Ninja UX Designer', details: 'Lorem' },
    { id: 2, title: 'Ninja Web Developer', details: 'Lorem' },
    { id: 3, title: 'Ninja Vue Developer', details: 'Lorem' },
]);
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