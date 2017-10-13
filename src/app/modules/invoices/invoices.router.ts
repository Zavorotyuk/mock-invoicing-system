import { Routes, RouterModule } from '@angular/router';
import { InvoicesComponent } from './invoices.component';

const INVOICES_ROUTER: Routes = [
  {
    path: '',
    component: InvoicesComponent
  }
];

export const invoicesRouter = RouterModule.forChild(INVOICES_ROUTER);
