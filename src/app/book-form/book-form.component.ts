import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from '../models/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup

  constructor(private formBuilder: FormBuilder,
    private bookService: BookService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required]
    });
  }

  onSubmit() {
    const title = this.bookForm.value['title'];
    const author = this.bookForm.value['author'];
    this.bookService.addBook(new Book(title, author));
  }

}
