<script setup lang="ts">
import { reactive, ref } from "vue";
import { Book, Books } from "@/Helpers/Book";

import type { Ref, UnwrapNestedRefs } from "vue";

const books: UnwrapNestedRefs<Book[]> = reactive(Books);

let showBooks: Ref<boolean> = ref(false);

const toggleShowBooks = (): void => {
  showBooks.value = !showBooks.value;
};

const toggleFavorite = (book: Book): void => {
  const foundBook: Book | undefined = books.find(
    (b: Book) => b.title === book.title && b.author === book.author
  );
  if (foundBook) {
    foundBook.favorite = !foundBook.favorite;
  }
};

const filterFavorites = (): void => {
  books.splice(0, books.length, ...books.filter((book) => book.favorite));
};

const handleEvent = (): void => {
  console.log("event");
};

const x: Ref<number> = ref(-1);
const y: Ref<number> = ref(-1);

const handleMousemove = (e: MouseEvent): void => {
  x.value = e.offsetX;
  y.value = e.offsetY;
};
</script>

<template>
  <ul v-if="showBooks" class="px-20">
    <li
      v-for="(book, index) in books"
      :key="index"
      :class="book.favorite ? 'bg-pink-400' : 'bg-slate-400'"
      class="rounded-lg shadow-lg p-6 my-8 flex justify-between items-center"
      @click="toggleFavorite(book)"
    >
      <!-- <img class="w-[100px] h-[100px]" src="./assets/book1.jpg" /> -->
      <img class="w-[100px] h-[100px]" :src="book.img" />
      <span>{{ book.title }}</span>
      <span>{{ book.author }}</span>
    </li>
  </ul>
  <div class="flex gap-10">
    <button class="mt-3" @click="toggleShowBooks">
      <span v-if="showBooks">Hide books</span>
      <span v-else>Show books</span>
    </button>
    <button v-if="showBooks" class="mt-3" @click="filterFavorites">
      Filter
    </button>
  </div>

  <br />

  <!-- uncomment this to see mouse events -->
  <!-- <div class="mt-4 flex gap-5">
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
  </div> -->
</template>