import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RedStoreRoutingModule } from './red-store-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailsComponent,
    AccountComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    RedStoreRoutingModule
  ]
})
export class RedStoreModule { }
