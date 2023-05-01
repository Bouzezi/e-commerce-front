import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule, GridModule, NavModule, UtilitiesModule, TabsModule, ToastModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { ColorsComponent, ThemeColorComponent } from './colors.component';
import { TypographyComponent } from './typography.component';

// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';
import { Theme1Component } from './theme1/theme1.component';
import { DashboardService } from 'src/app/service/dashboard.service';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    CardModule,
    GridModule,
    UtilitiesModule,
    IconModule,
    NavModule,
    TabsModule,
    ToastModule
  ],
  declarations: [
    ColorsComponent,
    ThemeColorComponent,
    TypographyComponent,
    Theme1Component,
  ],
  providers: [DashboardService]
})
export class ThemeModule {
}
