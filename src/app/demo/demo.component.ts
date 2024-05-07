import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  name:string=`JAYANT MUNDRE`;
  imgUrl:string='../../assets/Buddha.jpg';
  num:number=5
  constructor() { }

  ngOnInit(): void {
  }

}
