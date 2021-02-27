import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import firebase from 'firebase';
// import DataSnapshot from 'firebase/database';
import { Subject } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable()
export class BookService {

  books: Book[] = [];

  saveBooks() {
    firebase.database().ref('/books').set(this.books);
  }

  getBooks() {
    firebase.database().ref('/books')
      .on('value', (data: any) => {
        this.books = data.val() ? data.val() : [];
        if (this.books.length > 0) {
          console.log('Livre 1 : ' + this.books[0]);
        }
      }
      );
  }

  getBook(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref(`/books/${id}`).once('value').then(
          (data: any) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  addBook(book: Book) {
    this.books.push(book);
    this.saveBooks();
  }

  removeBook(book: Book) {
    const bookIndexToRemove = this.books.findIndex(
      (element) => {
        if (element === book) {
          return true;
        }
      }
    );
    this.books.splice(bookIndexToRemove, 1);
    this.saveBooks();
  }

}
