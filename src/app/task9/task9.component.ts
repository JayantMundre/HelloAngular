import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task9',
  templateUrl: './task9.component.html',
  styleUrls: ['./task9.component.css']
})
export class Task9Component implements OnInit {
  inputsize:any=5;
  constructor() { }

  ngOnInit(): void {
  }
  onKeyUp(width:any){
this.inputsize=width.target.value;
  }
}
