import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient,private router:Router) {  }
  logOn=new EventEmitter<Boolean>(false);
  getDa(data:any){
    this.http.post('http://localhost:3000/seller',data).subscribe((res)=>{
      if(res){
        localStorage.setItem('seller',JSON.stringify(res));
        this.router.navigate(['seller-home'])
      }
      
    })
  }
  getDa1(data:any){
    console.log(data.email+"  "+data.password);
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`).subscribe((result:any)=>{
      console.log("hi ",result);
      
      if(result.length >=1 ){
        this.logOn.emit(false)
        this.router.navigate(['seller-home'])
        localStorage.setItem('seller',JSON.stringify(result[0]));
      }
      else{
        this.logOn.emit(true)
      }
      
    })
    
    
  }
}
