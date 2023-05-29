<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  methods: {
    emitCloseModal(): void { 
      this.$emit('closeModal');
    }
  }
});

</script>


<template>
  <div class="fixed inset-0 flex items-center justify-center z-50">
    <div class="bg-gray-800 opacity-75 fixed inset-0" @click="emitCloseModal"></div>
    <div class="bg-white p-6 w-[500px] h-[300px] rounded-lg relative">
      <slot />
      <slot name="content"/>
      <p>divider</p>
      <slot name="links" />
      <br>
      <button
        class="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Submit
      </button>
    </div>
  </div>
</template>