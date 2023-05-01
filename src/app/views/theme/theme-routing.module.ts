import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorsComponent } from './colors.component';
import { Theme1Component } from './theme1/theme1.component';
import { TypographyComponent } from './typography.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Theme',
    },
    children: [
      {
        path: '',
        redirectTo: 'colors',
      },
      {
        path: 'colors',
        component: ColorsComponent,
        data: {
          title: 'Colors',
        },
      },
      {
        path: 'typography',
        component: TypographyComponent,
        data: {
          title: 'Typography',
        },
      },
      {
        path: 'themes',
        component: Theme1Component,
        data: {
          title: 'themes',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeRoutingModule {}
