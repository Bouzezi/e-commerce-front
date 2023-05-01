import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopConfigComponent } from './shop-config/shop-config.component';
import { ContactComponent } from './contact/contact.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import { ToastModule } from '@coreui/angular';
@NgModule({
  declarations: [
    ShopConfigComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ToastModule
  ]
})
export class SettingsModule { }
