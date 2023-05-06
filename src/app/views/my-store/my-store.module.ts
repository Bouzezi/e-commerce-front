import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MyStoreRoutingModule } from './my-store-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ShopComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MyStoreRoutingModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
  ]
})
export class MyStoreModule { }
