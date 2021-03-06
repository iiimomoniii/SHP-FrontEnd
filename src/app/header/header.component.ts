import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //send acion to main from child by void function
  @Output() navToggle = new EventEmitter();
  //send action to main from child with string
  //@Output("Say") sayHi = new EventEmitter<String>(); // String || Number

  @Input("media_query") mobileQueryMax: boolean;
  
  demoMailNoti: string;
  demoNoti : string;
  constructor() { }

  ngOnInit(): void {
    this.demoMailNoti = "10";
    this.demoNoti = "90";
  }

  onClickNavToggle(){
    this.navToggle.emit();
    //this.sayHi.emit("Hi Main");
  }

}
