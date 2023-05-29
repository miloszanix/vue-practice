<script setup lang="ts">
import { onMounted, ref, defineEmits, defineProps } from "vue";
import { Ref } from "vue";

const props = defineProps({
  delay: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(['end']);

const showBlock: Ref<boolean> = ref(false);
const timer: Ref<any> = ref(null);
const reactionTime: Ref<number> = ref(0);

const startTimer = (): void => {
  timer.value = setInterval(() => {
    reactionTime.value += 10;
  }, 10);
};

const stopTimer = (): void => {
  clearInterval(timer.value);
  emit('end', reactionTime.value);
};

onMounted(() => {
  setTimeout(() => {
    showBlock.value = true;
    startTimer();
  }, props.delay);
});
</script>


<template>
  <div
    v-if="showBlock"
    @click="stopTimer"
    class="w-[300px] h-[300px] rounded-lg bg-green-700 flex justify-center items-center mt-20 ml-10 text-white"
  >
    Click me!
  </div>
</template>