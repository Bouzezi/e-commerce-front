import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Internaute } from 'src/app/entities/Internaute';
import { Magasin } from 'src/app/entities/Magasin';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
internaute=new Internaute
magasin=new Magasin
isInternaute = true
isStore = true
  constructor(private loginService: AuthService,private route:Router) { }

  ngOnInit(): void {
  }

  insertInternaute(){
    console.log(this.internaute);
    
    this.loginService.addInternaute(this.internaute).subscribe(res => {
      console.log(res);
      this.route.navigateByUrl('/my-site/sign-in')
    }) 
  }

  insertStore(){
    console.log(this.magasin);
    
    this.loginService.addMagasin(this.magasin).subscribe(res => {
      console.log(res);
      this.route.navigateByUrl('/my-site/sign-in')
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
