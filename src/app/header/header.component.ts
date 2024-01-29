import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { dataType } from 'src/data-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
constructor(private route:Router,private produ:ProductService){}
m:any;
status:string='default'
name:string="";
j:string| null="";
da:dataType[]|undefined;
logout(){
  localStorage.removeItem('seller');
  this.route.navigate(['/']);
}
getSearch(val:any){
  console.log(val);
  this.produ.searchList(val).subscribe((res)=>{
    console.warn(res);
    this.da=res;
    
  })
  
}
ngOnInit():void{
this.route.events.subscribe((val:any)=>{
if(val.url){
  if(localStorage.getItem('seller') && val.url.includes('seller')){
    console.log("inside seller");  
    this.status='seller'; 
    if(localStorage.getItem('seller')){
      this.j=localStorage.getItem('seller');
      let s =this.j && JSON.parse(this.j);
      this.name=s.name;
      console.log(this.name);
      
      
    }

  }
  else{
    console.log("outside seller");
    this.status='default'

  }
}
  
  
})
}
}
