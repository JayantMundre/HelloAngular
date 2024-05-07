import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {
  username:string='Username Jayant...!';
  count:number=0;
  mydate=new Date();
  constructor() { }

  ngOnInit(): void {
  }
  onShow(){
    alert('Hi welcome'+this.username)
  }
  increment(){
    this.count=this.count+1;
  };
  dicrement(){
    this.count=this.count-1;
  };

}
