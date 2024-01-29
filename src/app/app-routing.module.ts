import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { ErrorCComponent } from './error-c/error-c.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { authGuard } from './auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"Seller", component:SellerAuthComponent},
  {path:"seller-auth", component: SellerAuthComponent},
  {path:"seller-home", component:SellerHomeComponent, canActivate:[authGuard]},
  {path:"seller-add", component:SellerAddProductComponent, canActivate:[authGuard]},
  {path:"seller-update/:id", component:SellerUpdateProductComponent, canActivate:[authGuard]},
  {path:"**",component:ErrorCComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
