import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
 @Output() childcustomevent=new EventEmitter();
 @Output() childarrayevent=new EventEmitter();
 @Output() msgevent=new EventEmitter();
  constructor() { }
  childstrdta:string='Child to parrent data binding...';
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
  ngOnInit(): void {
  }
  onSend(){
     this.childcustomevent.emit(this.childstrdta);
     this.childarrayevent.emit(this.arrObj);
  }
  onView(msg:any){
    this.msgevent.emit(msg);
    
  }
}
