import { Component } from '@angular/core';
import { DashboardService } from 'src/app/service/dashboard.service';

import { navItems } from './_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent {
  path!:string;
  public navItems = navItems;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor(private Myservice:DashboardService) {}
    ngafterInit(): void {
 
    
    if (navItems[1].name === "View Site"){
      this.path='/my-site/home';
      navItems[1].url=this.path;
    }
    console.log(navItems);
    
  }  
  /* function processQ() {
    // ... this will be called on each .push
 }
 
  navItems.push = function() { Array.prototype.push.apply(this, arguments);  processQ();}; */
}
