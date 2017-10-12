import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const router: Routes = [
  {
    path: '',
    loadChildren: 'app/components/invoices/invoices.module#InvoicesModule'
  },
  {
    path: 'customers',
    loadChildren: 'app/components/customers/customers.module#CustomersModule'
  },
  {
    path: 'products',
    loadChildren: 'app/components/products/products.module#ProductsModule'
  }
]

export const appRouter: ModuleWithProviders = RouterModule.forRoot(router);
