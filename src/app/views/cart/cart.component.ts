import { Component } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService]
})
export class CartComponent {
  cart:any = Cart;
  cartMain: any[] = [];
  constructor(private CartService: CartService) {

  }
  handleCheck() {
    
    console.log(this.cartMain);
  }
  ngOnInit() {
    this.getCart();
  }
  getCart() {
    this.CartService.getInforCart().subscribe(cart => {
      this.cart = cart;
      this.cartMain = this.cart.results;
    });
    
  }
}
