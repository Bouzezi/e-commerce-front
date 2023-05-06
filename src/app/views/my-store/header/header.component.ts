import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  MenuToggled = false;
  active = true;
  constructor() { }

  ngOnInit(): void {
  }

 public toggleField() {  
    this.MenuToggled = !this.MenuToggled;  
  }
  public toggleActive() {
    console.log(this.active);
      this.active = !this.active;  
  }


}
