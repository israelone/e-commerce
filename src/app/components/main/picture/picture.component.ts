import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products/products.service';
@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss'],
})
export class PictureComponent implements OnInit {
  @Input() currentProduct!: Product;
  mainImageSrc: string = '';
  imageSelected: number = 1;
  showModal: boolean = false;
  products: Product[];
  mobile!: boolean;

  constructor(private productsService: ProductsService) {
    this.products = this.productsService.getProducts();
  }

  ngOnInit(): void {
    this.mainImageSrc = this.currentProduct.mainImages[0].src;
    if (window.screen.width === 375 || window.screen.width < 375) {
      this.mobile = true;
    }
  }

  toggleModal() {
    if (!this.mobile) {
      if (this.showModal) {
        this.showModal = false;
      } else {
        this.showModal = true;
      }
    }
  }

  changeImage(e: any) {
    this.imageSelected = e.target.id;
    this.mainImageSrc =
      this.currentProduct.mainImages[this.imageSelected - 1].src;
  }

  selectNextImage() {
    if (this.imageSelected === 4) {
      this.imageSelected = 1;
    } else {
      this.imageSelected += 1;
    }
    this.mainImageSrc =
      this.currentProduct.mainImages[this.imageSelected - 1].src;
  }

  selectPreviousImage() {
    if (this.imageSelected === 1) {
      this.imageSelected = 4;
    } else {
      this.imageSelected -= 1;
    }
    this.mainImageSrc =
      this.currentProduct.mainImages[this.imageSelected - 1].src;
  }
}
