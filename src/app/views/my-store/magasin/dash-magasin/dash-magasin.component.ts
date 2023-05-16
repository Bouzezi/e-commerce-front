import { Component, OnInit, ViewChild } from '@angular/core';
import { MagasinService } from '../../../../service/magasin.service';
import { Magasin } from 'src/app/entities/Magasin';
import { ImageProduit } from '../../../../entities/ImageProduit';
import { Coupon } from '../../../../entities/Coupon';
import { ToasterComponent, ToasterPlacement } from '@coreui/angular';
import { AppToastComponent } from 'src/app/views/notifications/toasters/toast-simple/toast.component';
@Component({
  selector: 'app-dash-magasin',
  templateUrl: './dash-magasin.component.html',
  styleUrls: ['./dash-magasin.component.scss']
})
export class DashMagasinComponent implements OnInit {
  @ViewChild(ToasterComponent) toaster!: ToasterComponent;
  placement = ToasterPlacement.TopEnd;
  id_store:any
  magasin:any=new Magasin
  annonces:any=[]
  value:any
  page:number = 1
  coupon=new Coupon
  coupons:any=[];
    constructor(private magasinService : MagasinService) { }
  
    ngOnInit(): void {
      this.id_store=localStorage.getItem("id_store");
      this.getStoreById(this.id_store);
      this.getProductsAnnonce();
      this.getCoupons();
    }
    getStoreById(id:any){
      this.magasinService.getStoreById(id).subscribe(res => {
        console.log(res);
        this.magasin=res;
      }) 
    }
    getProductsAnnonce(){
      this.magasinService.getProductsAnnonce(this.id_store).subscribe(res => {
        console.log(res);
        this.annonces=res;
       
      }) 
    }
    search(){
   
    }
    addCoupon(){
      this.coupon.idC=this.id_store;
      this.magasinService.createCoupon(this.coupon).subscribe(res=>{
        console.log(res);
        this.getCoupons();
        this.addToast(`coupon added`,'success'); 
      })
    }
    updateCoupon(){
        this.coupon.idC=this.id_store;
        this.magasinService.updateCoupon(this.coupon).subscribe(res=>{
          console.log(res);
          this.getCoupons();
          this.addToast(`coupon updated`,'success'); 
        })
    }
    getCoupons(){
      this.magasinService.getCoupons(this.id_store).subscribe(res=>{
        console.log(res);
        this.coupons=res;
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
