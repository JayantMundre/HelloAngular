import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {
  square:any;
  cube:any;
  result:any;
  constructor() { }

  ngOnInit(): void {
  }
  onClickcube(inputnumber:any){
    if(inputnumber!=''){
    this.cube=inputnumber*inputnumber*inputnumber;
   this.result=inputnumber*inputnumber*inputnumber;
    }else{
      alert("please enter number");
    }
  }
  onClicksquare(inputnumber:any){
    if(inputnumber!=''){
      this.square=inputnumber*inputnumber;
     this.result=inputnumber*inputnumber;
    }else{
      alert("please enter number");
    }
  }
  onKeyUp(){
    this.square='';
    this.cube='';

  }
}
