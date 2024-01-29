import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dataType } from 'src/data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  arr:any;
  constructor(private http:HttpClient) { }
  fillForm(id:any){
    return this.http.get<dataType>(`http://localhost:3000/products/${id}`);
  }
  sendData(){
    return this.http.get<dataType[]>('http://localhost:3000/products');
  }
  deleteDat(id:Number){
    return this.http.delete(`http://localhost:3000/products/${id}`)
  }
  getDaa(data:dataType){
    return  this.http.post('http://localhost:3000/products',data).subscribe((res)=>{
      console.warn(res);
      
  })
    
  }
  updateData(data:any){
    return this.http.put(`http://localhost:3000/products/${data.id}`,data)
  }
  getImage(){
    return this.http.get<dataType[]>('http://localhost:3000/products?_limit=3');
  }
  getList(){
    return this.http.get<dataType[]>('http://localhost:3000/products?_limit=8');
  }
  searchList(data:any){
    console.log(data);
    
    return this.http.get<dataType[]>(`http://localhost:3000/products?q=${data}&_limit=5`);
  }
}
