import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  showModal:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleModal(){
    console.log(this.showModal);
    this.showModal = !this.showModal;
    console.log(this.showModal);
  }

}
