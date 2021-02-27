import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../models/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService,
    private router: Router) { }

  ngOnInit(): void {
    this.bookService.getBooks();
  }

  onAddBook() {
    this.router.navigate(['/livres', 'nouveau']);
  }

}
