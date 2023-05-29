<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

type Book = {
  author: string,
  title: string,
  age: number
};

const books: Book[] = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    age: 60
  },
  {
    title: "1984",
    author: "George Orwell",
    age: 72
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    age: 97
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    age: 209
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    age: 70
  }
];

let showBooks: Ref<boolean> = ref(false);

function toggleShowBooks(): void {
  showBooks.value = !showBooks.value;
}

function handleEvent(): void {
  console.log("event");
}

const x: Ref<number> = ref(-1);
const y: Ref<number> = ref(-1);

function handleMousemove(e: MouseEvent): void {
  x.value = e.offsetX;
  y.value = e.offsetY;
}
</script>

<template>
  <h1 v-if="showBooks" className="text-3xl font-bold underline">
    <template v-for="(book, index) in books" :key="index">
      {{ book.title }} - {{ book.author }} - {{ book.age }} <br>
    </template>
  </h1>
  <button class="mt-3" @click="toggleShowBooks">
    <span v-if="showBooks">Hide books</span>
    <span v-else>Show books</span>
  </button>

  <br />

  <div class="mt-4 flex gap-5">
    <div
      class="flex items-center justify-center px-28 py-0 bg-slate-400 w-96 h-96 text-center" @mouseover="handleEvent">
        mouseover (event)
    </div>
    <div
      class="flex items-center justify-center px-28 py-0 bg-slate-400 w-96 h-96 text-center" @mouseleave="handleEvent">
        mouseleave
    </div>
    <div
      class="flex items-center justify-center px-28 py-0 bg-slate-400 w-96 h-96 text-center" @dblclick="handleEvent">
        doubleclick
    </div>
    <div
      class="flex items-center justify-center px-28 py-0 bg-slate-400 w-96 h-96 text-center" @mousemove="handleMousemove">
      <template v-if="x !== -1 && y !== -1">
        Position: x - {{ x }}; y - {{ y }}
      </template>
    </div>
  </div>
</template>