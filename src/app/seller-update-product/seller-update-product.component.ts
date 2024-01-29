import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { dataType } from 'src/data-type';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent {
constructor(private route:ActivatedRoute,private dd:ProductService){

}
listData:dataType|undefined;
productId:number|undefined;
ngOnInit():void{
  let id=this.route.snapshot.paramMap.get('id');
  console.warn(id);
  console.error(id)
  this.productId=Number(id);
  this.dd.fillForm(id).subscribe((res)=>{
    console.error(res);
    this.listData=res;
    
  })
}
sendData(data:any){
  if(data){
    data.id=this.productId;
  }
this.dd.updateData(data).subscribe((res)=>{
  console.log(res);
  
})
}
}
