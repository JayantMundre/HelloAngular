import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-derective',
  templateUrl: './switch-derective.component.html',
  styleUrls: ['./switch-derective.component.css']
})
export class SwitchDerectiveComponent implements OnInit {
choice:string='';
  constructor() { }

  ngOnInit(): void {
  }
  toSend(inputcolor:any){
    this.choice=inputcolor.toLowerCase().trim();
  }
}
