import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService]
})
export class CartComponent {
  cart:any = [];
  constructor(private CartService: CartService) {

  }
  handleCheck() {
    
    console.log(this.cart);
  }
  ngOnInit() {
    this.getCart();
  }
  getCart() {
    this.CartService.getInforCart().subscribe(cart => {
      this.cart = cart;
    },error => {
      console.log(error);
    });
    
  }
}
