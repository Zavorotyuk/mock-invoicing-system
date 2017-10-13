import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const router: Routes = [
  {
    path: '',
    loadChildren: 'app/modules/invoices/invoices.module#InvoicesModule'
  },
  {
    path: 'customers',
    loadChildren: 'app/modules/customers/customers.module#CustomersModule'
  },
  {
    path: 'products',
    loadChildren: 'app/modules/products/products.module#ProductsModule'
  }
]

export const appRouter: ModuleWithProviders = RouterModule.forRoot(router);
