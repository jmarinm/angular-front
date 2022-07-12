import { Component } from '@angular/core';
import { BookService } from './services/book.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

const API_URL = 'https://shark.ontrack.global/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  books: any = {}
  book: any;

  
  constructor( private bookService: BookService){}
  
  form = new FormGroup({
    bookId: new FormControl('')
  });

  reportForm = new FormGroup({
    keyword: new FormControl('')
  })

  buscarLibros(){
    this.bookService.getAllBooks().subscribe( books => {
      this.books = books;
    })
  }

  vaciarLibros(){
    this.books = {}
  }

  get getBookId(): any {
    return this.form.value.bookId;
  }

  get getKeyWord(): any {
    return this.reportForm.value.keyword
  }

  buscarLibro(){
    let bookId = this.getBookId;
    this.bookService.getBookById(bookId).subscribe(book => {
      this.book = book
    })
  }
  
  descargarReporte(){
    this.bookService.generateReport(this.getKeyWord).subscribe(response => {
      window.open(`${API_URL}/book/report/download/${response.slice(17)}`)
    })
  }
}
