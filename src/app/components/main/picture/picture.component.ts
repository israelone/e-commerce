import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss'],
})
export class PictureComponent implements OnInit {
  imageSrc: string = `../../../../assets/images/image-product-1.jpg`;
  imageSelected: number = 1;
  constructor() {}

  ngOnInit(): void {}

  changeImage(e: any) {
    this.imageSelected = e.target.id;
    this.imageSrc = `../../../../assets/images/image-product-${e.target.id}.jpg`;
    console.log(this.imageSelected);
  }
}
