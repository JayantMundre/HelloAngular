import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
myid:number=0;
myusername:string='';
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getDataFromUrl();
  }
  getDataFromUrl(){
    this.route.paramMap
    .subscribe((param:any)=>{
    this.myid=+param.get("id");
    this.myusername=param.get("username");
    })
  }

}
