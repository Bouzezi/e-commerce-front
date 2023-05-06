import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Internaute } from 'src/app/entities/Internaute';
import { Magasin } from 'src/app/entities/Magasin';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
internaute=new Internaute
magasin=new Magasin
isInternaute = false
isStore = false
  constructor(private loginService: AuthService) { }

  ngOnInit(): void {
  }

  insertInternaute(){
    console.log(this.internaute);
    
    this.loginService.addInternaute(this.internaute).subscribe(res => {
      console.log(res);
    }) 
  }

  insertStore(){
    console.log(this.magasin);
    
    this.loginService.addMagasin(this.magasin).subscribe(res => {
      console.log(res);
    }) 
  }

  showStoreForm(){
    console.log("this.isStore");
    
      this.isStore=!this.isStore;
  } 

  showInternauteForm(){
    console.log(this.isInternaute);
    
      this.isInternaute=!this.isInternaute;
  }

}
