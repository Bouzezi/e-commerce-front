import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { MyStoreRoutingModule } from './my-store-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { DashMagasinComponent } from './magasin/dash-magasin/dash-magasin.component';
import { DashMagasinMenuComponent } from './magasin/dash-magasin-menu/dash-magasin-menu.component';
import { ProfileMagasinComponent } from './magasin/profile-magasin/profile-magasin.component';
import { EditProfileMagasinComponent } from './magasin/edit-profile-magasin/edit-profile-magasin.component';
import { ListProductsComponent } from './magasin/list-products/list-products.component';
import { AddProductComponent } from './magasin/add-product/add-product.component';
import { AnnonceDetailComponent } from './annonce-detail/annonce-detail.component';
import { DashInternauteComponent } from './internaute/dash-internaute/dash-internaute.component';
import { AddProductInternauteComponent } from './internaute/add-product-internaute/add-product-internaute.component';
import { DashInternauteMenuComponent } from './internaute/dash-internaute-menu/dash-internaute-menu.component';
import { EditProfileInternauteComponent } from './internaute/edit-profile-internaute/edit-profile-internaute.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ShopComponent,
    SignUpComponent,
    SignInComponent,
    DashMagasinComponent,
    DashMagasinMenuComponent,
    ProfileMagasinComponent,
    EditProfileMagasinComponent,
    ListProductsComponent,
    AddProductComponent,
    AnnonceDetailComponent,
    DashInternauteComponent,
    AddProductInternauteComponent,
    DashInternauteMenuComponent,
    EditProfileInternauteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    MyStoreRoutingModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
  ]
})
export class MyStoreModule { }
