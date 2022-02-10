import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products/products.service';

import { PictureComponent } from './picture.component';

describe('PictureComponent', () => {
  let mainImageSrc = 'assets/images/image-product-1.jpg';
  let currentProduct:Product;
  let component: PictureComponent;
  let fixture: ComponentFixture<PictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictureComponent ],
      providers:[ProductsService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureComponent);
    currentProduct={
      id:1,
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
    component.mainImageSrc = mainImageSrc;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle showModal to true',()=>{
    component.toggleModal();
    expect(component.showModal).toBe(true);
  })

  it('should toggle showModal to false',()=>{
    component.showModal=true;
    component.toggleModal();
    expect(component.showModal).toBe(false);
  })

});
