import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-query-parameter',
  templateUrl: './query-parameter.component.html',
  styleUrls: ['./query-parameter.component.css']
})
export class QueryParameterComponent implements OnInit {
myid:any='';
myname:string='';
myrole:string='';
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getDataFromUrl();
  }
  getDataFromUrl(){
    this.route.queryParamMap
    .subscribe((param:any)=>{
      console.log(param.get("id"));
      console.log(param.get("name"));
      console.log(param.get("role"));
     this.myid=+param.get("id");
     this.myname=param.get("name");
     this.myrole=param.get("role");
    })
  }

}
