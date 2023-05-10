import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/entities/Login';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
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
    this.loginService.loginInternaute(this.login).subscribe(res => {
      console.log(res);
      this.id_inter=res;
      localStorage.setItem("id_inter",this.id_inter);
      this.route.navigateByUrl('/my-site/dash-magasin')
    }) 
  }

  loginStore(){
    console.log(this.login);
    localStorage.clear();
    this.loginService.loginMagasin(this.login).subscribe(res => {
      console.log(res);
      this.id_store=res;      
      localStorage.setItem("id_store",this.id_store);
      this.route.navigateByUrl('/my-site/dash-magasin')
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

}
