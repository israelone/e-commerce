import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  products: any;
  currentProduct:any;
  constructor(private userNameService: ProductsService) {
    this.products = this.userNameService.getProducts();
    this.currentProduct=this.products[0];
    console.log(this.currentProduct);
  }

  ngOnInit(): void {}
}
