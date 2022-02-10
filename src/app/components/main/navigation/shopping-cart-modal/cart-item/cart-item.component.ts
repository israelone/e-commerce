import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() product!: Product;
  constructor(private cartService:CartService) {

   }
  ngOnInit(): void {

  }

  removeProduct(){
    console.log(this.product);
    this.cartService.removeProduct(this.product.id);
  }
}
