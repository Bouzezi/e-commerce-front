import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { DashMagasinComponent } from './magasin/dash-magasin/dash-magasin.component';
import { ProfileMagasinComponent } from './magasin/profile-magasin/profile-magasin.component';
import { EditProfileMagasinComponent } from './magasin/edit-profile-magasin/edit-profile-magasin.component';
import { ListProductsComponent } from './magasin/list-products/list-products.component';
import { AddProductComponent } from './magasin/add-product/add-product.component';
import { AnnonceDetailComponent } from './annonce-detail/annonce-detail.component';
import { DashInternauteComponent } from './internaute/dash-internaute/dash-internaute.component';
import { AddProductInternauteComponent } from './internaute/add-product-internaute/add-product-internaute.component';
import { EditProfileInternauteComponent } from './internaute/edit-profile-internaute/edit-profile-internaute.component';

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
      {
        path: 'sign-up',
        component: SignUpComponent,
        data: {
          title: 'sign-up',
        },
      },
      {
        path: 'sign-in',
        component: SignInComponent,
        data: {
          title: 'sign-in',
        },
      },
      {
        path: 'dash-magasin',
        component: DashMagasinComponent,
        data: {
          title: 'dash-magasin',
        },
      },
      {
        path: 'profile-magasin',
        component: ProfileMagasinComponent,
        data: {
          title: 'profile-magasin',
        },
      },
      {
        path: 'edit-profile-magasin',
        component: EditProfileMagasinComponent,
        data: {
          title: 'edit-profile-magasin',
        },
      },
      {
        path: 'list-products-magasin',
        component: ListProductsComponent,
        data: {
          title: 'list-products-magasin',
        },
      },
      {
        path: 'add-product',
        component: AddProductComponent,
        data: {
          title: 'add-product',
        },
      },
      {
        path: 'annonce-detail/:id',
        component: AnnonceDetailComponent,
        data: {
          title: 'annonce-detail',
        },
      },
      {
        path: 'dash-internaute',
        component: DashInternauteComponent,
        data: {
          title: 'dash-internaute',
        },
      },
      {
        path: 'add-product-internaute',
        component: AddProductInternauteComponent,
        data: {
          title: 'add-product-internaute',
        },
      },
      {
        path: 'edit-profile-internaute',
        component: EditProfileInternauteComponent,
        data: {
          title: 'edit-profile-internaute',
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
