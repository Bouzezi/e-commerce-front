import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopConfigComponent } from './shop-config/shop-config.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'settings',
    },
    children: [
      {
        path: '',
        redirectTo: 'shopconfig',
      },
      {
        path: 'shopconfig',
        component: ShopConfigComponent,
        data: {
          title: 'shopConfig',
        },
      },
      {
        path: 'contact',
        component: ContactComponent,
        data: {
          title: 'contact',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
