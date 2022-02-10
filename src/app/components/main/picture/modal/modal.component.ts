import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() currentProduct!:Product;
  @Output() toggleModal = new EventEmitter<any>();
  mainImageSrc: string = "";
  @Input() imageSelected!: number;
  showModal:boolean = false
  constructor() {}

  ngOnInit(): void {
    this.mainImageSrc = this.currentProduct.mainImages[this.imageSelected - 1].src;
  }

  changeImage(e: any) {
    this.imageSelected = parseInt(e.target.id);
    this.mainImageSrc = this.currentProduct.mainImages[this.imageSelected-1].src;
  }

  selectNextImage(){
    if(this.imageSelected === 4){
      this.imageSelected = 1;
    }else{
     this.imageSelected += 1;
    }
    this.mainImageSrc = this.currentProduct.mainImages[this.imageSelected - 1].src;
  }

  selectPreviousImage(){
    if(this.imageSelected === 1){
      this.imageSelected = 4;
    }else{
     this.imageSelected -= 1;
    }
    this.mainImageSrc = this.currentProduct.mainImages[this.imageSelected - 1].src;
  }

}
