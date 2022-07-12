import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  API = 'https://shark.ontrack.global/api';
  constructor(private http: HttpClient) { }

public getAllBooks(): Observable<any>{
  return this.http.get(this.API+'/book/get');
}

public getBookById(id: number): Observable<any>{
  return this.http.get(this.API + '/book/get/'+id);
}

public createBook(book: any): Observable<any>{
  return this.http.post(this.API + '/book/create', book,{responseType: 'text'});
}

public generateReport(keyword: string): Observable<any>{
  return this.http.get(this.API + '/book/report/'+ keyword, {responseType: 'text'})
}
}
