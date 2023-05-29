<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Ref } from "vue";

const props = defineProps({
  delay: {
    type: Number,
    required: true,
  },
});

const showBlock: Ref<boolean> = ref(false);

onMounted(() => {
  console.log("component mounted");
});
</script>


<template>
  <div
    v-if="showBlock"
    class="w-[300px] h-[300px] rounded-lg bg-green-700 flex justify-center items-center mt-20 ml-10 text-white"
  >
    Click me!
  </div>
</template>