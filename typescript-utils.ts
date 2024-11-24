import { Book, BooksList } from "./types";

export function createBook(title: string, author: string): Book {
  return { title, author };
}

export function listBooks(books: BooksList) {
  return books
    .map((book) => `<li>${book.title} by ${book.author}</li>`)
    .join("\n");
}

export function deleteBook(books: BooksList, title: string) {
  const index = books.findIndex((book) => book.title === title);
  if (index !== -1) {
    books.splice(index, 1);
    return true;
  }
  return false;
}
