import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { dataType } from 'src/data-type';
import {faTrash,faEdit} from '@fortawesome/free-solid-svg-icons'
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';
@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {
constructor(private da:ProductService, private route:ActivatedRoute){}
list:dataType[] |undefined;
message:string="";
icon=faTrash;
icn=faEdit;
id:number|undefined;
apiCall(){
  this.da.sendData().subscribe((res:dataType[])=>{
    if(res){
      this.list=res;
    }
    })
}

ngOnInit():void{
this.apiCall();



}
deleteData(id:number){
  this.da.deleteDat(id).subscribe((res)=>{
    if(res){
      this.apiCall();
      this.message="Product is deleted successfully"

    }
    setTimeout(() => {
      this.message="";
    }, 3000);
  })
  
}

}
