import { Component, OnInit, ViewChild } from '@angular/core';
import { Theme } from 'src/app/entities/theme';
import { SiteParam } from 'src/app/entities/siteParam';
import { DashboardService } from '../../../service/dashboard.service';
import {ToasterComponent, ToasterPlacement } from '@coreui/angular';
import { AppToastComponent } from '../../notifications/toasters/toast-simple/toast.component';
import { navItems } from 'src/app/containers/default-layout/_nav';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-theme1',
  templateUrl: './theme1.component.html',
  styleUrls: ['./theme1.component.scss'],
  providers: [Theme,SiteParam]
})
export class Theme1Component implements OnInit {
  @ViewChild(ToasterComponent) toaster!: ToasterComponent;
  placement = ToasterPlacement.TopEnd;
  theme_idd!:number;
  themes:any[]= [];
  path!: string;
  constructor(private Myservice:DashboardService,
    private theme:Theme,
    private siteParam:SiteParam,
    private router:Router,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getThemes();
    this.Myservice.themeId=this.theme_idd;
    
  }
  getThemes(){
      this.Myservice.getAllThemes().subscribe((data:any) => {
        console.log(data);  
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          this.themes.push(data[key]);
        }
      }
    });
  }
  applyTheme(theme:Theme){
    this.theme_idd=theme.id;
    this.Myservice.checkParamSite().subscribe((data:any)=>{
      console.log(data)
       if(data == -1)
      this.addThemeParamSite(theme.id);
      else 
          this.changeTheme(theme.id); 
     })
     this.Myservice.themeId=theme.id;
     
     console.log(this.Myservice.themeId);
     console.log(navItems);
     
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
    
    //  wait for the toast
    setTimeout(() => { this.refreshComponent(); }, 3000);
     
  }
  // refresh the component without reloading 
  refreshComponent(){
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./'],{
      relativeTo: this.route
    }) 
  }
  addThemeParamSite(id:number){
    this.siteParam.id_theme=id;
    console.log(this.siteParam);
    this.Myservice.addThemeParamSite(this.siteParam).subscribe(data => {
      console.log(data),
      this.addToast(`Theme is applyed`),
      (error: any) => console.log(error);
    });
  }

  changeTheme(id:number){
    this.siteParam.id_theme=id;
    this.Myservice.changeThemeParamSite(this.siteParam).subscribe(data =>{
      console.log(data),
      this.addToast(`Theme is applyed`),
        (error: any) =>{
          console.log(error);
          this.addToast(error);
        }
    }); 
  }

  addToast(con:string) {   
    const options = {
      title: `Toast`,
      body:con,
      delay: 2000,
      placement: this.placement,
      color: 'success',
      autohide: true,
    }
    const componentRef = this.toaster.addToast(AppToastComponent, { ...options });
  }
    
}

