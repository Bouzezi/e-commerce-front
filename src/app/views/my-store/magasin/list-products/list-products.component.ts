import { Component, OnInit } from '@angular/core';
import { MagasinService } from '../../../../service/magasin.service';
import { Annonce } from '../../../../entities/Annonce';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  products:any=[]
  value:any
  page:number = 1
  id_store:any
  annonce=new Annonce
  constructor(private magasinService : MagasinService) { }

  ngOnInit(): void {
    this.id_store=localStorage.getItem("id_store");
   //this.getProductsNonAnnoce();
   this.getAllProductsByIdClient();
  }
  getAllProductsByIdClient(){
    this.magasinService.getAllProductsByIdClient(this.id_store).subscribe(res => {
      console.log(res);
      this.products=res;
    }) 
  }
  getProductsNonAnnoce(){
    this.magasinService.getProductsNonAnnonce(this.id_store).subscribe(res => {
      console.log(res);
      this.products=res;
    }) 
  }
  
  publish(){
    this.annonce.idC=this.id_store;
    this.magasinService.createAnnonce(this.annonce).subscribe(res => {
      console.log(res);
      this.magasinService.sendUpdate("notifiy")
      this.getAllProductsByIdClient();
    })
  }
  delete(id:any){
    this.magasinService.deleteProduct(id).subscribe(res=>{
      console.log(res);
      this.magasinService.sendUpdate("notifiy")
      this.getAllProductsByIdClient();
    })
  }
  search(){
   
  }
  saveId(id:any){
    this.annonce.ProduitId=id;
  }
}
