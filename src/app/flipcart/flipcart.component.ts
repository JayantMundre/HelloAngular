import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flipcart',
  templateUrl: './flipcart.component.html',
  styleUrls: ['./flipcart.component.css']
})
export class FlipcartComponent implements OnInit {
imgUrl:string="../../assets/Bhumi.webp"
imgUrl1:string="../../assets/Cable.jpeg"
imgUrl2:string="../../assets/Ande.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
