import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Product } from 'src/app/interfaces/product';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let mainImageSrc:string;
  let currentProduct:Product;
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    currentProduct={
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
        id:0
      },
      {
        src: 'assets/images/image-product-2.jpg',
        alt: '',
        id:1
      },
      {
        src: 'assets/images/image-product-3.jpg',
        alt: '',
        id:2
      },
      {
        src: 'assets/images/image-product-4.jpg',
        alt: '',
        id:3
      }],
      thumbnails: [
        { src: 'assets/images/image-product-1-thumbnail.jpg', alt: '', id:0 },
        { src: 'assets/images/image-product-2-thumbnail.jpg', alt: '', id:1 },
        { src: 'assets/images/image-product-3-thumbnail.jpg', alt: '', id:2 },
        { src: 'assets/images/image-product-4-thumbnail.jpg', alt: '', id:4 },
      ],
    },
    component = fixture.componentInstance;
    component.currentProduct=currentProduct;
    component.mainImageSrc = currentProduct.mainImages[0].src;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
