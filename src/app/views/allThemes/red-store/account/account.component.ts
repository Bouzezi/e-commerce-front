import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   /* LoginForm = document.getElementById("LoginForm");
     RegForm = document.getElementById("RegForm");
     Indicator = document.getElementById("Indicator");
     register() {
        RegForm.style.transform = "translatex(0px)";
        LoginForm.style.transform = "translatex(0px)";
        Indicator.style.transform = "translateX(100px)";

    }
     login() {
        RegForm.style.transform = "translatex(300px)";
        LoginForm.style.transform = "translatex(300px)";
        Indicator.style.transform = "translate(0px)";

    } */
}
