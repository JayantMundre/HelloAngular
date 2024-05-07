import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-derective',
  templateUrl: './for-derective.component.html',
  styleUrls: ['./for-derective.component.css']
})
export class ForDerectiveComponent implements OnInit {
course:string[]=['Core java','Advance java',
'Angular','HTML','CSS'];

arrObj:any[]=[
  { name:"Redmi9Prime",
     price:12000,
     qty:1
  },
  { name:"Infinix-HotX3",
  price:10000,
  qty:1
},
{ name:"Redmi9A",
price:7000,
qty:1
},
{ name:"Motorola",
price:30000,
qty:2
},
{ name:"iphone-14",
price:50000,
qty:1
},
{ name:"Dugga",
price:100000,
qty:2
}
];
selected:string='';
  constructor() { }

  ngOnInit(): void {
  }
  onMouseOver(item:any){
    console.log('My Name Is Khan mouse over event');
    this.selected=item.name;
  }
  onMouseout(){
    console.log('Mouse out event occure...')
    this.selected='';
  }
}
