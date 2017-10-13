import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';

const PRODUCTS_ROUTER: Routes = [
  {
    path: '',
    component: ProductsComponent
  }
];

export const productsRouter = RouterModule.forChild(PRODUCTS_ROUTER);
