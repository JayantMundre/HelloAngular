import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
name:string='Dugga Book';
imgUrl:string='../../assets/Dugga.jpg';
ishidden:boolean=false;
mycol:number=2;
  constructor() { }

  ngOnInit(): void {
  }

}
