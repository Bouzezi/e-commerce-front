import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'redStore',
    },
    children: [
       {
        path: '',
        redirectTo: 'home',
      }, 
      {
        path: 'home',
        component: HomeComponent,
        data: {
          title: 'home',
        },
      },
      {
        path: 'products',
        component: ProductsComponent,
        data: {
          title: 'products',
        },
      },
      {
        path: 'product_details',
        component: ProductDetailsComponent,
        data: {
          title: 'product-details',
        },
      },
      {
        path: 'account',
        component: AccountComponent,
        data: {
          title: 'account',
        },
      },
      {
        path: 'cart',
        component: CartComponent,
        data: {
          title: 'cart',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedStoreRoutingModule { }
