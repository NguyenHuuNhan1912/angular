import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private url: string = 'http://localhost:3004/api/order';
  constructor(private http: HttpClient) { }
  getInforCart(): Observable<[]> {
    return this.http.get(this.url)
      .pipe(
        // Biến đổi kiểu dữ liệu trả về thành js object
        map((response: any) => {
          console.log(response);
          return response;
        }),
        
      )
  }
  deleteCart(): Observable<[]> {
    return this.http.delete("http://localhost:3004/api/order/642537383c7a98f4113f4c44")
      .pipe(
        map((response: any) => {
          console.log(response);
          return response;
        }),
      )
  }
  createCart(): Observable<[]> {
    return this.http.post("http://localhost:3004/api/order", {
      name: 'Nguyen Huu Nhan Test Angular JS',
      province: 'An Giang',
    })
      .pipe(
        map((response: any) => {
          console.log(response);
          return response;
        })
      )
  }
  updateCart(): Observable<[]> {
    return this.http.put("http://localhost:3004/api/order/6463ad6d96d925c740087758", {
      name: 'Nguyen Huu Nhan Test Angular JS update',
    })
      .pipe(
        map((response: any) => {
          console.log(response);
          return response;
        })
      )
  }
  getOneCart(): Observable<[]> {
    return this.http.get("http://localhost:3004/api/order/6463ad6d96d925c740087758")
      .pipe(
        map((response: any) => {
          console.log(response);
          return response;
        })
      )
  }
  filterStatusCart(): Observable<[]> {
    return this.http.get("http://localhost:3004/api/order/filtersStatus?status=pending")
      .pipe(
        map((response: any) => {
          console.log(response);
          return response;
        })
      )
  }
}
