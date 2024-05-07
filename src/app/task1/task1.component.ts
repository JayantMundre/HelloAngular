import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
  isChanged:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(divname:any){
    divname.style.background='pink';
    divname.style.color='white';
  }
  onClick1(){
    this.isChanged=true;

  }
}