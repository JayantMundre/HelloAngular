import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  Posts: any;
  obj:any[]=[];
  id:number=0;
  title:string='';
  body:string='';
  productId:number=0;
  productName:string='';
  productQty:number=0;
  productPrice:number=0

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
     onSend(mytitle:any,mybody:any){
       let obj={
        title:mytitle,
        body:mybody
       }

       this.service.PostData(obj)
       .subscribe((response)=>{
        console.log(response);
       })
     }
     onEdit(item:any){
      this.id=item.id;
      this.title=item.title;
      this.body=item.body;
      this.isHidden=false;
    }
    onUpdate(){
     let obj={ id:this.id,
      title:this.title,
      body:this.body
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
