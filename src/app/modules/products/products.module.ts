import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { productsRouter } from './products.router';


@NgModule({
  imports: [
    CommonModule,
    productsRouter
  ],
  declarations: [ProductsComponent]
})
export class ProductsModule { }
