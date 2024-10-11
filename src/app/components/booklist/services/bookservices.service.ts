import { Injectable } from '@angular/core';
import { Book } from '../book';
@Injectable({
  providedIn: 'root',
})
export class BookListService {
  private books: Book[] = [];

  constructor() {}

  addBook(isbn: string, bookTitle: string, author: string): void {
    const newBook: Book = { isbn, bookTitle, author };
    this.books.push(newBook);
  }

  getBooks(): Book[] {
    return this.books;
  }

  editBook(isbn: string, bookTitle: string, author: string): void {
    const book = this.books.find(book => book.isbn === isbn);
    if (book) {
      book.bookTitle = bookTitle;
      book.author = author;
    }
  }

  deleteBook(isbn: string): void {
    this.books = this.books.filter(book => book.isbn !== isbn);
  }
}
