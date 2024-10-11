import { Component } from '@angular/core';
import { Book } from './book';
import { BookListService } from './services/bookservices.service';
@Component({
  selector: 'app-book-list',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],
})
export class BookListComponent {
  isbn = '';
  bookTitle = '';
  author = '';
  isEditing = false;

  constructor(private bookService: BookListService) {}

  addBook(): void {
    if (this.isEditing) {
      this.bookService.editBook(this.isbn, this.bookTitle, this.author);
      this.isEditing = false;
    } else {
      this.bookService.addBook(this.isbn, this.bookTitle, this.author);
    }
    this.resetForm();
  }

  getBooks(): Book[] {
    return this.bookService.getBooks();
  }

  editBook(book: Book): void {
    this.isbn = book.isbn;
    this.bookTitle = book.bookTitle;
    this.author = book.author;
    this.isEditing = true;
  }

  deleteBook(isbn: string): void {
    this.bookService.deleteBook(isbn);
  }

  resetForm(): void {
    this.isbn = '';
    this.bookTitle = '';
    this.author = '';
    this.isEditing = false;
  }
}
