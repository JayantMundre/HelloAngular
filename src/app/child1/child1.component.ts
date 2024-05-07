import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  @Input() parentdta:any="";
  @Input() parentjson:any;
  @Input() list!:string[];
  @Input() datedata:number= 0;
  constructor() { }

  ngOnInit(): void {
  }

}
