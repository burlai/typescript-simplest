import { BooksList } from "./types";
import { createBook, listBooks, deleteBook } from "./typescript-utils.js";

const books: BooksList = [];

const addButton = document.getElementById("addBook");
const deleteButton = document.getElementById("deleteBook");
const listElement = document.getElementById("bookList");

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const deleteTitleInput = document.getElementById("deleteTitle");

if (addButton && titleInput && authorInput) {
  addButton.addEventListener("click", () => {
    const title = (titleInput as HTMLInputElement).value; // Type assertion, change to typeguard (and the same for the other type assertions in this file)
    const author = (authorInput as HTMLInputElement).value;

    if (title && author) {
      books.push(createBook(title, author));
      updateBookList();
    } else {
      alert("Please provide both title and author!");
    }
  });
}

if (deleteButton && deleteTitleInput) {
  deleteButton.addEventListener("click", () => {
    const title = (deleteTitleInput as HTMLInputElement).value;

    if (title && deleteBook(books, title)) {
      updateBookList();
    } else {
      alert(`Book with title "${title}" not found.`);
    }
  });
}

function updateBookList() {
  if (listElement) {
    listElement.innerHTML = listBooks(books).replace(/\n/g, "<br>");
  }
}
