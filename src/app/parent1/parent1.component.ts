import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {
  childproperty:string='WELCOME JAYANT...!';
  jsonObj={
    id:10,
    fname:'Dugga',
    lname:'Mundre'
  }
  herolist:any[]=['jay','duggu','bev','Gattu','Tomybev'];
  constructor() { }
  datedata:number=0;
  ngOnInit(): void {
  }
  onClick(inputdate:any){
   this.datedata=inputdate;
  }
}
