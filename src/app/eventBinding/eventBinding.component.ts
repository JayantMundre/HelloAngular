import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eventBinding',
  templateUrl: './eventBinding.component.html',
  styleUrls: ['./eventBinding.component.css']
})
export class ClssbindingComponent implements OnInit {
   count:number=0;
   result:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  onClick()
  
  {
    if(this.count==0){
    console.log("Click Event Occure")
    this.count++;
    }
  }
  onImg(){
    console.log("Image Click Occure")
  }
  onSend(myObj:any){
    console.log(myObj.value);

    myObj.style.background='green';
  }
  onAddition(num1:any,num2:any){
      let n1=+num1;
      let n2=+num2;
      this.result= n1+n2;
  }
  onChange(){
    console.log("Change Event...")
  }
  onKeyup(){
    console.log("jay")
  }
  onKeydown(){
    console.log("jayant")
  }
}
