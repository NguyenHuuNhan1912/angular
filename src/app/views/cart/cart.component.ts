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
  cartMain: any = [];
  constructor(private CartService: CartService) {

  }
  handleCheck() {
    console.log(this.cartMain);
  }

  ngOnInit() {
    this.getCart();
  }
  handleDeleteCart() {
    console.log('delete cart'); 
    this.CartService.deleteCart().subscribe(cart => {
      this.cart = cart;
      this.cartMain = this.cart.order;
    },error => {
      console.log(error);
    });
  }
  handleCreateCart() {
    this.CartService.createCart().subscribe(cart => {
      this.cart = cart;
      this.cartMain = this.cart.order;
    },error => {
      console.log(error);
    });
  }
  handleUpdateCart() {
    this.CartService.updateCart().subscribe(cart => {
      this.cart = cart;
      this.cartMain = this.cart.order;
    },error => {
      console.log(error);
    });
  }
  getCart() {
    this.CartService.getInforCart().subscribe(cart => {
      this.cart = cart;
      this.cartMain = this.cart.order;
    },error => {
      console.log(error);
    });
  }
  handleGetOneCart() {
    this.CartService.getOneCart().subscribe(cart => {
      this.cart = cart;
      console.log(this.cart);
    },error => {
      console.log(error);
    });
  }
  handleFilCart() {
    this.CartService.filterStatusCart().subscribe(cart => {
      this.cart = cart;
    },error => {
      console.log(error);
    });
  }
}
