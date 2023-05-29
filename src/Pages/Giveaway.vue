<script setup lang="ts">
import Modal from "@/Components/Modal.vue";
import { ref } from "vue";

import type { Ref } from 'vue';

const showModal: Ref<boolean> = ref(false);

const toggleModal = (): boolean => showModal.value = !showModal.value;

</script>

<template>
  <Modal v-if="showModal" @closeModal="toggleModal" header="Test header" text="Text text" />
  <button @click="toggleModal()">Toggle modal</button>
</template>