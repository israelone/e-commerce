import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ProductsService {
  products = [
    {
      name: 'Sneaker Company',
      header:"Fall Limited Edition Sneakers",
      description:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable subber outer sole, they'll withstand everything the weather an offer",
      price: 250,
      discount: 50,
      quantity: 0,
      mainImages: [{
        src: 'assets/images/image-product-1.jpg',
        alt: '',
      },
      {
        src: 'assets/images/image-product-2.jpg',
        alt: '',
      },
      {
        src: 'assets/images/image-product-3.jpg',
        alt: '',
      },
      {
        src: 'assets/images/image-product-4.jpg',
        alt: '',
      }],
      thumbnails: [
        { image: 'assets/images/image-product-1-thumbnail.jpg', alt: '', id:"0" },
        { image: 'assets/images/image-product-2-thumbnail.jpg', alt: '', id:"1" },
        { image: 'assets/images/image-product-3-thumbnail.jpg', alt: '', id:"2" },
        { image: 'assets/images/image-product-4-thumbnail.jpg', alt: '', id:"3" },
      ],
    },
  ];

  execChange: Subject<any> = new Subject<any>();

  constructor() {}

  getProducts() {
    return this.products;
  }
}
