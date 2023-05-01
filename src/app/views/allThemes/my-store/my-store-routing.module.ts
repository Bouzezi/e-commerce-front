import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'my-site',
    redirectTo: 'home',
    pathMatch: 'full'
  }, 
  {
    path: '',
    data: {
      title: 'home page',
    },
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: {
          title: 'home',
        },
      },
      {
        path: 'shop',
        component: ShopComponent,
        data: {
          title: 'shop',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyStoreRoutingModule { }
