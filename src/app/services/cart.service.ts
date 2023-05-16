import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private http: HttpClient) { }
  temp: any = [];
  getInforCart(): Observable<[]> {
    return this.http.get(this.url)
      .pipe(
        // Biến đổi kiểu dữ liệu trả về thành js object
        map((response: any) => {
          this.temp = response;
          // console.log(this.temp.results);
          return this.temp.results;
        }),
        
      )
  }
}
