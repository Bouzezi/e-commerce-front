import { Component, OnInit } from '@angular/core';
import { MagasinService } from '../../../../service/magasin.service';
import { Magasin } from 'src/app/entities/Magasin';
import { ImageProduit } from '../../../../entities/ImageProduit';
import { Coupon } from '../../../../entities/Coupon';
@Component({
  selector: 'app-dash-magasin',
  templateUrl: './dash-magasin.component.html',
  styleUrls: ['./dash-magasin.component.scss']
})
export class DashMagasinComponent implements OnInit {
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
      })
    }
    updateCoupon(){
        this.coupon.idC=this.id_store;
        this.magasinService.updateCoupon(this.coupon).subscribe(res=>{
          console.log(res);
          this.getCoupons();
        })
    }
    getCoupons(){
      this.magasinService.getCoupons(this.id_store).subscribe(res=>{
        console.log(res);
        this.coupons=res;
      })
    }
}
