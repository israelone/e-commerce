import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  @Input() currentProduct:any;
  quantity:number=0;
  constructor() { }

  ngOnInit(): void {
    console.log(this.currentProduct);
  }

  addOneProduct(){
    this.quantity+=1;
  }

  substractOneProduct(){
    this.quantity-=1;
  }

}
