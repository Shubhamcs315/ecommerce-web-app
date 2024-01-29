import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  message:string="";
  constructor(private com:ProductService){}
sendData(data:any){
  console.log(data);
  this.com.getDaa(data)
  this.message="New product is added";
  setTimeout(() => {
  this.message="";
  }, 3000);
}

}
