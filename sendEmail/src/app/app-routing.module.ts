import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from "./product/product.component";
import {CartComponent} from "./cart/cart.component";


const routes: Routes = [
  {
    path: "",
    component : ProductComponent
  },
  {
    path:"cart/:id",
    component:CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
