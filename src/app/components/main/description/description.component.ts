import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  quantity:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  addOneProduct(){
    this.quantity+=1;
  }

  substractOneProduct(){
    this.quantity-=1;
  }

}
