import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from 'src/app/interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Product[] = [];

  addProduct(product: Product, quantity: number) {
    const includes = this.cart.indexOf(product);
    if (includes === -1) {
      product.quantity = quantity;
      this.cart.push(product);
    } else {
      this.cart[includes].quantity += quantity;
    }
  }

  removeProduct(productId:number) {
    const result = this.cart.findIndex(product=>product.id==productId);
    this.cart.splice(result, 1);
  }

  getCart() {
    return this.cart;
  }

  execChange: Subject<any> = new Subject<any>();

  constructor() {}
}
