import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  Posts: any;
  obj:any[]=[];
  id:number=0;
  title:string='';
  pqty:number=0;
  price:number=0
  isHidden:boolean=true;
  constructor(private service:HttpService) { }

  ngOnInit(): void {
    this.getPost();
  }
  getPost(){
    this.service.getReport()
   .subscribe((response:any)=>{
    this.Posts=response;
  })
   }
   onSend(mytitle:any,myprice:any){
     let obj={
      title:mytitle,
      price:myprice
     }

     this.service.PostData(obj)
     .subscribe((response)=>{
      console.log(response);
     })
   }
   onEdit(item:any){
    this.id=item.productId;
    this.title=item.productName;
    this.pqty=item.productQty;
    this.price=item.productPrice;
    this.isHidden=false;
  }
  onUpdate(){
   let obj={ productId:this.id,
    productName:this.title,
    productQty:this.pqty,
    prproductPriceice:this.price
  }
  this.service.UpdateData(obj)
  .subscribe((response)=>{
    console.log(response);
    this.isHidden=true;
   })
  }
  onDelete(id:any){
     this.service.DeleteData(id)
     .subscribe((response)=>{
      console.log(response);
      console.log('data Deleted...!')
      this.isHidden=true;
     })
  }
}

