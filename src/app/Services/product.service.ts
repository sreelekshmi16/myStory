import { Injectable } from '@angular/core';
import { product } from '../models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private httpClient: HttpClient
  ) { }

  products: product[] = [];
  // 
  //   {
  //     imgName: 'assets/watch.png',
  //     imgTitle: 'Fossil $50',
  //     imgDes: `Some quick example text to build on the card title and make up the bulk of the card's content`,
  //     isAvailable: true,
  //   },
  //   {
  //     imgName: 'assets/bag.png',
  //     imgTitle: 'Fossil $50',
  //     imgDes: `Some quick example text to build on the card title and make up the bulk of the card's content`,
  //     isAvailable: false,
  //   },
  //   {
  //     imgName: 'assets/sandal.png',
  //     imgTitle: 'Fossil $50',
  //     imgDes: `Some quick example text to build on the card title and make up the bulk of the card's content`,
  //     isAvailable: false,
  //   }
  // ];

  getProducts() {
    // return this.products;
    return this.httpClient.get('http://localhost:3000/product')
  }
}
