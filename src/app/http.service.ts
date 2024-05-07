import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
// baseurl:string='https://jsonplaceholder.typicode.com/posts';
url:string='http://localhost:8091/product/get-all-product';


  constructor(private http:HttpClient) { }
  getReport(){
    return (this.http.get(`${this.url}`));
  }
  
  PostData(obj:any){
    return (this.http.post(`${this.url}add-product`,obj));
  }
  UpdateData(obj:any){
    return this.http.put(`${this.url}/${obj.id}`,obj)
  }
  DeleteData(id:any){
   return this.http.delete(`${this.url}/${id}`)
  }

}
