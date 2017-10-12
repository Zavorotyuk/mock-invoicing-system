import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesComponent } from './invoices.component';
import { invoicesRouter } from './invoices.router';

@NgModule({
  imports: [
    CommonModule,
    invoicesRouter
  ],
  declarations: [InvoicesComponent]
})
export class InvoicesModule { }
