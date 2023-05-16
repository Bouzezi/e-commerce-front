import { Component, OnInit, ViewChild } from '@angular/core';
import { Login } from 'src/app/entities/Login';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { error } from 'jquery';
import { ToasterComponent, ToasterPlacement } from '@coreui/angular';
import { AppToastComponent } from '../../notifications/toasters/toast-simple/toast.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  @ViewChild(ToasterComponent) toaster!: ToasterComponent;
  placement = ToasterPlacement.TopEnd;
  
  login = new Login
  isInternaute = true
  isStore = true
  id_inter:any
  id_store:any

  constructor(private loginService: AuthService,private route:Router) { }

  ngOnInit(): void {
  }

  loginInternaute(){
    console.log(this.login);
    localStorage.clear();
    this.loginService.loginInternaute(this.login).subscribe(
      (res:any)=>{
      console.log(res);
      if(res != 0){
        this.id_inter=res;
        localStorage.setItem("id_inter",this.id_inter);
        this.route.navigateByUrl('/my-site/dash-internaute')
      }else{
        this.addToast(`invalid email or password`,'danger');
      }
      
    }) 
  }

  loginStore(){
    console.log(this.login);
    localStorage.clear();
    this.loginService.loginMagasin(this.login).subscribe(
      (res:any )=> {
      console.log(res);
      if(res != 0){
        this.id_store=res;      
        localStorage.setItem("id_store",this.id_store);
        this.route.navigateByUrl('/my-site/dash-magasin')
      }else{
        this.addToast(`invalid email or password`,'danger');
      }
    }) 
  }

  showStoreForm(){
    this.isInternaute=true
    this.isStore=false;
} 

  showInternauteForm(){
      this.isStore=true
      this.isInternaute=false;
  }
  addToast(con:string,color:string) {   
    const options = {
      title: `Toast`,
      body:con,
      delay: 3000,
      placement: this.placement,
      color: color,
      autohide: true,
    }
    const componentRef = this.toaster.addToast(AppToastComponent, { ...options });
  }

}
