<script setup lang="ts">

</script>

<template>
    <div class="flex gap-5 underline text-blue-700 p-10">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
    </div>
    <div class="p-10">
        <router-view />
    </div>
</template>