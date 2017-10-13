import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesComponent } from './invoices.component';
import { invoicesRouter } from './invoices.router';
import { InvoicesService } from '../../services/invoices.service';
import { CreateInvoiceComponent } from './components/create-invoice/create-invoice.component';
import { UpdateInvoiceComponent } from './components/update-invoice/update-invoice.component';
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';


@NgModule({
  imports: [
    CommonModule,
    invoicesRouter
  ],
  providers: [InvoicesService],
  declarations: [InvoicesComponent, CreateInvoiceComponent, UpdateInvoiceComponent, InvoiceFormComponent]
})
export class InvoicesModule { }
