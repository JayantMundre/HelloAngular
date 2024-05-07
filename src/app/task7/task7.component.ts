import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task7',
  templateUrl: './task7.component.html',
  styleUrls: ['./task7.component.css']
})
export class Task7Component implements OnInit {
  username:any;
  password:any;
  constructor() { }
  inputnumber:any;
  answer:boolean=true;
  ngOnInit(): void {
  }
  onLogin(){
       if(this.username=='jayant'&& this.password=='jayant'){
        alert("Validate sussesfully!!!");
       }else{
        alert("Invalid Username and Password");
       };
       this.username='';
       this.password='';
  }
  onShow(){
      this.answer=false;
      if(this.inputnumber==null){
        this.answer=true;
      }
  }
}
