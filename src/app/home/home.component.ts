import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
myid:number=9;
username:string='JAYANT MUNDRE';

jsonObj={
  id:101,
  name:"jayant dada",
  role:"software Devoloper"
}
username1:any;
password:any;
  // constructor(private route:ActivatedRoute) { }
  constructor(private router:Router) { }

  ngOnInit(): void {
   
  }
  // onLogin(){
  //   this.router.navigate(['Login'])
  //   }
  onPage1(){
  this.router.navigate(['Page1']);
  }
  onPage2(){
    this.router.navigate(['Page2']);
  }
  onPage3(){
    this.router.navigate(['Page3',this.myid,this.username]);
  }
  onFollower(){
    this.router.navigate(['Follower',this.myid]);
  }
  onMyFollower(){
    this.router.navigate(['MyFollower']);
  }
  onQueryParameter(){
    this.router.navigate(['QueryParameter'],{
      queryParams:this.jsonObj
    });
  }
  onLogin(){
    if(this.username1=='jayant'&& this.password=='jayant'){
     alert("Validate sussesfully!!!");
     this.router.navigate(['Login']);
    }else{
     alert("Invalid Username and Password");
    };
    this.username1='';
    this.password='';
}

 
}
