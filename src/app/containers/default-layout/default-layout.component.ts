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
      if(this.Myservice.themeId === 1)
      this.path='/site/redStore';
      else if (this.Myservice.themeId === 3)
      this.path='/site/aviato';
      else if (this.Myservice.themeId === 2)
      this.path='/site/classimax';
      navItems[1].url=this.path;
    }
    console.log(navItems);
    
  }  
  /* function processQ() {
    // ... this will be called on each .push
 }
 
  navItems.push = function() { Array.prototype.push.apply(this, arguments);  processQ();}; */
}
