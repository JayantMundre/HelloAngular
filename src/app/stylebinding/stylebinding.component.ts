import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {
jsonObj={
  color:'yellow',
  fontSize:'32px',
'font-family':'Courier New',
"background-color": "purple"


}
  constructor() { }
mycolor:string='green';
rating:number=4;
  ngOnInit(): void {
  }

}
