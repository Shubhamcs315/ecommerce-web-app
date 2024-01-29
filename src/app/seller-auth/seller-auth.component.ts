import { Component,OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  
  constructor(private s:ServiceService, private router:Router){}
  logm:boolean=false;
  
  ngOnInit():void{
    
    if(localStorage.getItem('seller')){
      this.router.navigate(['seller-home'])
    }
  }
  toggle(){
    this.logm=!this.logm;
  }
getData(dat:any){
  this.s.getDa(dat)
  
}
b:any=false;
getData1(dat:any){
  this.s.getDa1(dat)
  this.s.logOn.subscribe((datt=>{
    if(datt){
      this.b=datt;
    }
    
  }))  
  
}
}
