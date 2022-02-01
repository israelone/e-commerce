import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
//TODO fix image selection
@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss'],
})
export class PictureComponent implements OnInit {
  @Input() currentProduct:any;
  imageSrc: string = `../../../../assets/images/image-product-1.jpg`;
  imageSelected: number = 1;
  showModal:boolean = false
  products:any;

  constructor(private userNameService : ProductsService) {
    this.products=this.userNameService.getProducts();
  console.log(this.products);
  }

  ngOnInit(): void {}

  toggleModal(){
    if(this.showModal){
      this.showModal=false;
    }else{
      this.showModal=true;
    }
  }

  changeImage(e: any) {
    this.imageSelected = e.target.id;
    this.imageSrc = `../../../../assets/images/image-product-${e.target.id}.jpg`;
  }
}
