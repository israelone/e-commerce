import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss'],
})
export class PictureComponent implements OnInit {
  @Input() currentProduct:any;
  mainImageSrc: string = ''
  imageSelected: number = 0;
  showModal:boolean = false
  products:any;

  constructor(private productsService : ProductsService) {
    this.products=this.productsService.getProducts();
  }

  ngOnInit(): void {this.mainImageSrc = this.currentProduct.mainImages[0].src;}

  toggleModal(){
    if(this.showModal){
      this.showModal=false;
    }else{
      this.showModal=true;
    }
  }

  changeImage(e: any) {
    this.imageSelected = parseInt(e.target.id);
    this.mainImageSrc = this.currentProduct.mainImages[this.imageSelected].src;
  }
}
