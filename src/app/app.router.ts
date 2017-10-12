import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const router: Routes = [
  {
    path: '',
    loadChildren: 'app/components/invoices/invoices.module#InvoicesModule'
  }
]

export const appRouter: ModuleWithProviders = RouterModule.forRoot(router);
