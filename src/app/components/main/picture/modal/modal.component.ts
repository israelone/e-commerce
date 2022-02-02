import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() currentProduct:any;
  @Output() toggleModal = new EventEmitter<any>();
  mainImageSrc: string = "";
  imageSelected: number = 0;
  showModal:boolean = false
  constructor() {}

  ngOnInit(): void {
    this.mainImageSrc = this.currentProduct.mainImages[0].src;
  }

  changeImage(e: any) {
    this.imageSelected = parseInt(e.target.id);
    this.mainImageSrc = this.currentProduct.mainImages[this.imageSelected].src;
  }

  selectNextImage(){
    if(this.imageSelected === 3){
      this.imageSelected = 0;
    }else{
     this.imageSelected += 1;
    }
    this.mainImageSrc = this.currentProduct.mainImages[this.imageSelected].src;
  }

  selectPreviousImage(){
    if(this.imageSelected === 0){
      this.imageSelected = 3;
    }else{
     this.imageSelected -= 1;
    }
    this.mainImageSrc = this.currentProduct.mainImages[this.imageSelected].src;
  }

}
