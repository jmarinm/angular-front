import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl  } from '@angular/forms';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'BookForm',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  constructor(private bookService: BookService) { }

  form = new FormGroup({
    author: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
    subject: new FormControl(''),
    year: new FormControl('')
  });

  ngOnInit(): void {
  }

  createBook(){
    let book = this.form.value;
    this.bookService.createBook(book).subscribe(resp => {
      this.form.reset();
    });
    
  }

}
