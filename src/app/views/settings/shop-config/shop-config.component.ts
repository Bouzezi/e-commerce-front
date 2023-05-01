import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from 'src/app/service/dashboard.service';
import { SiteParam } from 'src/app/entities/siteParam';
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
siteParam: SiteParam=new SiteParam();
  constructor(private Myservice:DashboardService,private fb:FormBuilder,private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.initializeForm();
    this.siteParam=new SiteParam();
    this.getSiteParam(); 
    this.getLogo();  
  }
 
  ngAfterViewInit(){
    
  }
 
   initializeForm(){
    this.shopSettings=this.fb.group({
      shopName : ''
    });
  } 

  getSiteParam(){
    this.Myservice.getSiteParam().subscribe((data:any) => {
      console.log(data);
      if(data != -1){
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            this.siteParam.nom=data[key].nom;
            this.siteParam.logo=data[key].logo;           
            this.shopSettings.get('shopName')?.setValue(this.siteParam.nom);
          }
        }
      } 
    });
  }
  getLogo(){
    this.Myservice.getlogo().subscribe((data:any)=>{
      console.log(data);
      if(data.type == 'text/html'){
        this.display='none';
      }else{
        let objectURL = URL.createObjectURL(data);       
        this.imageSource=this.sanitizer.bypassSecurityTrustUrl(objectURL);
        this.display='block';
      }
      (error: any) => console.log(error);
    })
  }
  onChange(event:any) {
    this.file = event.target.files[0];;
  }
   onSubmit():void{
     let array=this.file.type.split('/');
    if (array[1] == 'png' || array[1] == 'jpg' || array[1] == 'jpeg'){
      let formData = new FormData(); 
      formData.append("logo", this.file, this.file.name);
      formData.append("shopName", this.shopSettings.value.shopName);
      this.ShopNameSettings(formData);
    }else
    this.addToast(`False Extension`,'danger')  
  }
   ShopNameSettings(formData : FormData){
    this.Myservice.ShopNameSettings(formData).subscribe(data => {
      console.log(data),
      this.addToast(`shop settings are applyed`,'success'),
      this.getLogo(),
      (error: any) => console.log(error);
    });
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
