import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe, map } from 'rxjs';
import { Cart } from '../models/cart.model';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getInforCart(): Observable<Cart> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/')
      .pipe(
        map((response: any) => response)
      )
  }
}
