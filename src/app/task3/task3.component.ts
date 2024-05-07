import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {
  changeStyle:string='initialbutton';
  isChangeStyle:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
 onClick(){
  this.changeStyle="textstyle";
 }
 onClick1(){
  this.isChangeStyle=true;
 }
}
