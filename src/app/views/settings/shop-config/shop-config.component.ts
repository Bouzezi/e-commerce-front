import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from 'src/app/service/dashboard.service';
import { DeliveryCompany } from 'src/app/entities/stl';
import { FormGroup,FormBuilder, FormControl } from '@angular/forms';
import {ToasterComponent, ToasterPlacement } from '@coreui/angular';
import { AppToastComponent } from '../../notifications/toasters/toast-simple/toast.component';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-shop-config',
  templateUrl: './shop-config.component.html',
  styleUrls: ['./shop-config.component.scss']
})
export class ShopConfigComponent implements OnInit {
  @ViewChild(ToasterComponent) toaster!: ToasterComponent;
  placement = ToasterPlacement.TopEnd;
shopSettings!: FormGroup;
  file!: File;
  imageSource:SafeUrl|null='';
  display:string='none';
delivery=new DeliveryCompany;
  constructor(private Myservice:DashboardService,private fb:FormBuilder,private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    //this.initializeForm();

  }
 
 
   initializeForm(){
    this.shopSettings=new FormGroup({
      adresse :new FormControl(),
      email : new FormControl(),
      name : new FormControl(),
      tax : new FormControl(),
      ref : new FormControl(),
      phone : new FormControl()
    });
  } 


  onChange(event:any) {
    this.file = event.target.files[0];;
  }
   onSubmit():void{
     /* let array=this.file.type.split('/');
    if (array[1] == 'png' || array[1] == 'jpg' || array[1] == 'jpeg'){
      let formData = new FormData(); 
      formData.append("logo", this.file, this.file.name);
      formData.append("shopName", this.shopSettings.value.shopName);
      //this.ShopNameSettings(formData);
    }else
    this.addToast(`False Extension`,'danger')   */
    this.addDelivery();
  }
 
  addDelivery(){
    this.Myservice.addDelivery(this.delivery).subscribe(res=>{
      console.log(res); 
      this.addToast(`Company added`,'success'); 
    })
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
