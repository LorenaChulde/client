import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [{
  path: 'products',
  component: ProductsComponent
}]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
    //CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
