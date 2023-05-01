import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { AddCategoryComponent } from './add-category/add-category.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Categories',
    },
    children: [
      {
        path: '',
        redirectTo: 'categoriesList',
      },
      {
        path: 'categoriesList',
        component: CategoriesListComponent,
        data: {
          title: 'CategoriesList',
        },
      },
      {
        path: 'addCategory',
        component: AddCategoryComponent,
        data: {
          title: 'addCategory',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
