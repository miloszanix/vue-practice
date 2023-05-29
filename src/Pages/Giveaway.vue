<script setup lang="ts">
import Modal from "@/Components/Modal.vue";
import { ref } from "vue";

import type { Ref } from 'vue';

const showModal: Ref<boolean> = ref(false);

const toggleModal = (): boolean => showModal.value = !showModal.value;

</script>

<template>
  <Modal v-if="showModal" @closeModal="toggleModal">
    <p>default slot</p>
    <p>one more</p>
    <template v-slot:content>
      <h1>Hey</h1>
      <p>this is test</p>
    </template>

    <template v-slot:links>
      <a href="">Link 1</a><br>
      <a href="">link 2</a>
    </template>
  </Modal>
  <button @click="toggleModal()">Toggle modal</button>
</template>