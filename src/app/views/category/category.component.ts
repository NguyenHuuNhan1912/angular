import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [ProductServiceService],
})
export class CategoryComponent {
  products: any[];
  constructor(private ProductServiceService: ProductServiceService) {
    // let produtService = new ProductServiceService();
    let arrResult = ProductServiceService.getProduct();
    this.products = arrResult;
  }
  getProducts() {
    
  }
  handleCheck() {
    console.log(this.products);
  }
}
