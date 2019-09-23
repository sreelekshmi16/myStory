import { Component, OnInit } from '@angular/core';
import { product } from '../models/Product';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: product[] = [];

  constructor(private productService: ProductService) {
    this.productService.getProducts()
    .subscribe( (res: product[]) => {
      this.products = res;
    });
  }
  ngOnInit() {
  }
}
