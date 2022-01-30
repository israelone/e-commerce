import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output() toggleModal = new EventEmitter<any>();
  imageSrc: string = `../../../../assets/images/image-product-1.jpg`;
  imageSelected: number = 1;
  showModal:boolean = false
  constructor() {}

  ngOnInit(): void {}

  changeImage(e: any) {
    this.imageSelected = e.target.id;
    this.imageSrc = `../../../../assets/images/image-product-${e.target.id}.jpg`;
  }

  selectNextImage(){
    if(this.imageSelected === 4){
      this.imageSelected = 1;
    }else{
     this.imageSelected += 1;
    }
    this.imageSrc = `../../../../assets/images/image-product-${this.imageSelected}.jpg`
  }

  selectPreviousImage(){
    if(this.imageSelected === 1){
      this.imageSelected = 4;
    }else{
     this.imageSelected -= 1;
    }
    this.imageSrc = `../../../../assets/images/image-product-${this.imageSelected}.jpg`
  }
}
