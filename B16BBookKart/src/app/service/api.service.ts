import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // books$ = this.getProduct().pipe(shareReplay(1));

  getProduct() {
    return this.http
      .get<any>('https://bookcart.azurewebsites.net/api/book/')
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
