import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'aviato',
    },
    children: [
       {
        path: '',
        redirectTo: 'index',
      }, 
      {
        path: 'index',
        component: HomeComponent,
        data: {
          title: 'index',
        },
      },
      /* {
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
      }, */
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AviatoRoutingModule { }
