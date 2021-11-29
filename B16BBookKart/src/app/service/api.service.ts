import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  bookList$ = this.getProduct();

  getProduct(): Observable<any> {
    return this.http
      .get<Book[]>('https://bookcart.azurewebsites.net/api/book/')
  }
}
