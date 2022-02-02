import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  @Input() currentProduct:any;
  quantity:number=0;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    console.log(this.currentProduct);
  }

  addOneProduct(){
    this.quantity+=1;
  }

  substractOneProduct(){
    this.quantity-=1;
  }

  addProductToCart(){
    this.cartService.addProduct(this.currentProduct, this.quantity);
    this.quantity=0;
  }

}
