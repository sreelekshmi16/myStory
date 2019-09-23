import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product;
  // @Input(prod) can also be used
  // name should be same in @input and inside[]
  constructor(private router: Router) { }
  addToCart() {
    console.log('click');
  }
  goToDetails(productId) {
    this.router.navigate(['product', productId]);
  }
  ngOnInit() {
  }
}

