import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products: any[] = [
    {
      name: 'Iphone 10',
      quantity: 2,
      price: 190000,
    },
    {
      name: 'Iphone 11',
      quantity: 3,
      price: 200000,
    },
    {
      name: 'Iphone 15 pro max',
      quantity: 4,
      price: 193000,
    },
  ];
  getProduct() {
    return this.products;
  }
}
