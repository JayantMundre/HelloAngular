import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
username:any;
password:any;
  constructor() { }
title:string='JayantBook'
  ngOnInit(): void {
  }
  onClick(dta1:any,dta2:any){
  this.username=dta1;
  this.password=dta2;
  
  }
}
