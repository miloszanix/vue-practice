import type { Book } from "@/helpers/BookType";

import Book1 from '@/assets/book1.jpg';
import Book2 from '@/assets/book2.jpg';
import Book3 from '@/assets/book3.jpg';
import Book4 from '@/assets/book4.jpg';
import Book5 from '@/assets/book5.jpg';

export const Books: Book[] = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    img: Book1,
    favorite: true,
  },
  {
    title: "1984",
    author: "George Orwell",
    img: Book2,
    favorite: false,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    img: Book3,
    favorite: false,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    img: Book4,
    favorite: true,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    img: Book5,
    favorite: false,
  },
];
