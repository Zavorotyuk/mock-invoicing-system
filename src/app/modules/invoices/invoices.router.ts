import { Routes, RouterModule } from '@angular/router';
import { InvoicesComponent } from './invoices.component';
import { CreateInvoiceComponent } from './components/create-invoice/create-invoice.component';
import { UpdateInvoiceComponent } from './components/update-invoice/update-invoice.component';

const INVOICES_ROUTER: Routes = [
  {
    path: '',
    component: InvoicesComponent
  },
  {
    path: 'create',
    component: CreateInvoiceComponent
  },
  {
    path: 'update/:id',
    component: UpdateInvoiceComponent
  }
];

export const invoicesRouter = RouterModule.forChild(INVOICES_ROUTER);
