import { Component, OnInit } from '@angular/core';
//import { Internaute } from 'src/app/entities/Internaute';
import { Login } from 'src/app/entities/Login';
//import { Magasin } from 'src/app/entities/Magasin';
import { AuthService } from '../../../service/auth.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
/*   internaute=new Internaute
  magasin=new Magasin */
  login = new Login
  isInternaute = true
  isStore = true
  id_inter:any
  id_store:any

  constructor(private loginService: AuthService) { }

  ngOnInit(): void {
  }

  loginInternaute(){
    console.log(this.login);
    
    this.loginService.loginInternaute(this.login).subscribe(res => {
      console.log(res);
      this.id_inter=res;
      localStorage.setItem("id_inter",this.id_inter);
    }) 
  }

  loginStore(){
    console.log(this.login);
    
    this.loginService.loginMagasin(this.login).subscribe(res => {
      console.log(res);
      this.id_store=res;
      localStorage.setItem("id_store",this.id_store);
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
