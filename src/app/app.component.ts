import { Component } from '@angular/core';
// import { product } from './models/Product';
// import { ProductService } from './Services/product.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myStore';
  // products: product[] = [];
  // productFeature: product = {
  //   imgName: 'assets/watch.png',
  //   imgTitle: 'Fossil $50',
  //   imgDes: `Some quick example text to build on the card title and make up the bulk of the card's content`,
  //   isAvailable: true,
  // };
  // constructor(private productService: ProductService) {
  //   this.productService.getProducts()
  //   .subscribe( (res: product[]) => {
  //     this.products = res;
  //   });
    constructor(){}
    // this.products = this.productService.getProducts(); this.products is array and http returns observable and assign it to array gives error

  //   this.products.push(this.productFeature);
  //   this.products.push({
  //     imgName: 'assets/bag.png',
  //   imgTitle: 'Fossil $50',
  //   imgDes: `Some quick example text to build on the card title and make up the bulk of the card's content`,
  //   isAvailable: false,
  // });
    // this.products.push(this.productFeature);
    // console.log(this.products);
  }

  // above are cut from product component ts file inside class

