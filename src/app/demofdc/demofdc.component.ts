import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demofdc',
  templateUrl: './demofdc.component.html',
  styleUrls: ['./demofdc.component.css']
})
export class DemofdcComponent implements OnInit {

country:any[]=[
  {cid:1,cname:'India'},
  {cid:2,cname:'China'},
  {cid:3,cname:'Austrelia'}];

  Email_Pattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(f:any){
    console.log(f.value.myusername)
    console.log(f.value.comment)
    console.log(f.value.mail)
    console.log(f.value.country)
  }

}
