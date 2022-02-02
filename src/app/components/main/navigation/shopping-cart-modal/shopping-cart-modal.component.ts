import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-shopping-cart-modal',
  templateUrl: './shopping-cart-modal.component.html',
  styleUrls: ['./shopping-cart-modal.component.scss']
})
export class ShoppingCartModalComponent implements OnInit {
  @Output() toggleModal = new EventEmitter<any>();
  products:any;
  constructor(private cartService:CartService) {
    this.products=cartService.getCart();
    console.log(this.products);
   }

  ngOnInit(): void {
  }

}
