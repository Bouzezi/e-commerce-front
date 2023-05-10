import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  MenuToggled = false;
  active = true;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  toggleField() {  
    this.MenuToggled = !this.MenuToggled;  
  }
   toggleActive() {
    console.log(this.active);
      this.active = !this.active;  
  }
  signout(){
    localStorage.clear();
  }
  checkLogin(){
    if( localStorage.length == 0)
        this.route.navigateByUrl('/my-site/sign-in')
    else{
        if (localStorage.getItem("id_inter")!= undefined)
          this.route.navigateByUrl('/my-site/dash-magasin')
        else
          this.route.navigateByUrl('/my-site/dash-magasin')
    }
  }
  
}
