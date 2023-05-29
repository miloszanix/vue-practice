<script lang="ts">

import { defineComponent } from 'vue';
import type { ModalProps } from '@/Helpers/Modal';

export default defineComponent({
  props: {
    header: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    emitCloseModal(): void { 
      this.$emit('closeModal');
    }
  },
  setup(props: ModalProps) {
    const { header, text } = props;

    return { header, text };
  }
});

</script>


<template>
  <div class="fixed inset-0 flex items-center justify-center z-50">
    <div class="bg-gray-800 opacity-75 fixed inset-0" @click="emitCloseModal"></div>
    <div class="bg-white p-6 w-[500px] h-[300px] rounded-lg relative">
      <h2 class="text-2xl mb-4">{{ header }}</h2>
      <p>{{ text }}</p>
      <button
        class="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Submit
      </button>
    </div>
  </div>
</template>