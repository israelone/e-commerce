import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss'],
})
export class PictureComponent implements OnInit {
  imageSrc: string = `../../../../assets/images/image-product-1.jpg`;
  imageSelected: number = 1;
  showModal:boolean = false
  constructor() {}

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
