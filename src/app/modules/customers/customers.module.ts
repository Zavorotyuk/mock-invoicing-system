import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { customersRouter } from './customers.router';

@NgModule({
  imports: [
    CommonModule,
    customersRouter
  ],
  declarations: [CustomersComponent]
})
export class CustomersModule { }
