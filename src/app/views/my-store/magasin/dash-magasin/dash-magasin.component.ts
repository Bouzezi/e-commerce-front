import { Component, OnInit } from '@angular/core';
import { MagasinService } from '../../../../service/magasin.service';
import { Magasin } from 'src/app/entities/Magasin';
import { ImageProduit } from '../../../../entities/ImageProduit';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
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
  images:any = []
    constructor(private magasinService : MagasinService ,private http:HttpClient) { }
  
    ngOnInit(): void {
      this.id_store=localStorage.getItem("id_store");
      this.getStoreById(this.id_store);
      this.getProductsAnnonce();
      this.getImages();
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
    getImages(){
      this.magasinService.getImages(8).subscribe(res=>{
        console.log(res);
        this.images=res
        
      })
    }
    
}
