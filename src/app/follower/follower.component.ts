import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.css']
})
export class FollowerComponent implements OnInit {
myid:number=0;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getDataFromUrl();
  }
  getDataFromUrl(){
    this.route.paramMap
    .subscribe((kuchbhi:any)=>{
      console.log(kuchbhi.get("id"))
      this.myid=+kuchbhi.get("id");
    })
  }
}
