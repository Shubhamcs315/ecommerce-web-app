import { Component,OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { dataType } from 'src/data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  arr:dataType[]|undefined;
  ar:dataType[]|undefined;
  constructor(private pro:ProductService){
    
  }
  ngOnInit(){
    this.pro.getList().subscribe((res)=>{
      this.ar=res;
    })
    if(this.pro){
      this.pro.getImage().subscribe((res)=>{
        this.arr=res;
        console.log(this.arr);
        
      })
    }
  }

}
