<script setup lang="ts">
import { ref } from "vue";

import type { Ref } from 'vue';

const email: Ref<string> = ref('');
const password: Ref<string> = ref('');
const role: Ref<string> = ref('developer');
const terms: Ref<boolean> = ref(false);
const tempSkill: Ref<string> = ref('');
const skills: Ref<string[]> = ref([]);
const passwordError: Ref<string> = ref('');

const addSkill = (e: KeyboardEvent): void => {
    if (e.key === ',' && tempSkill.value) {
        if (!skills.value.includes(tempSkill.value)) {
            skills.value.push(tempSkill.value);
        }
        tempSkill.value = '';
    }
};

const deleteSkill = (skill: string): void => {
    skills.value = skills.value.filter((s: string) => s !== skill);
};

const handleSubmit = (): void => {
    passwordError.value = password.value.length > 5 ? '' : 'Password need to be at least 6 characters long';
};

</script>

<template>
    <div class="bg-slate-500 h-screen flex items-center justify-center">
        <form class="rounded-lg bg-white w-[800px] flex flex-col p-5" @submit.prevent="handleSubmit">
            <label>Email:</label>
            <input v-model="email" type="email" class="p-2 rounded-md bg-slate-300" required>
            <label>Password:</label>
            <input v-model="password" type="password" class="p-2 rounded-md bg-slate-300" required>
            <div class="text-red-500" v-if="passwordError">{{ passwordError }}</div>
            <label>Role:</label>
            <select v-model="role" class="p-2 rounded-md bg-slate-300">
                <option value="developer">Web Developer</option>
                <option value="designer">Web Designer</option>
            </select>
            <label>Skills:</label>
            <input v-model="tempSkill" @keyup.alt="addSkill" class="p-2 rounded-md bg-slate-300 mb-2" type="text">
            <div class="flex flex-row gap-2">
                <span v-for="(skill, index) in skills" :key="index" class="inline bg-gray-300 p-2 rounded-lg" @click="deleteSkill(skill)">{{ skill }}</span>
            </div>
            <div class="terms flex items-center">
                <input v-model="terms" type="checkbox">
                <label class="ml-2">Accept terms and conditions</label>
            </div>
            <button type="submit" class="bg-slate-300 p-2 rounded-lg">Create an account</button>
        </form>
    </div>
</template>