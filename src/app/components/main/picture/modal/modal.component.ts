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
    console.log(this.imageSelected);
  }
}
