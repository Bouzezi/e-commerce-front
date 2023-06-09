import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Sub Categories',
    },
    children: [
      {
        path: '',
        redirectTo: 'Sub-CategoriesList',
      },
      {
        path: 'Sub-CategoriesList',
        component: ProductsListComponent,
        data: {
          title: 'Sub-CategoriesList',
        },
      },
      {
        path: 'addProduct',
        component: AddProductComponent,
        data: {
          title: 'AddProduct',
        },
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
