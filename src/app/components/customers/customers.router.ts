import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers.component';

const CUSTOMERS_ROUTER: Routes = [
  {
    path: '',
    component: CustomersComponent
  }
];

export const customersRouter = RouterModule.forChild(CUSTOMERS_ROUTER);
