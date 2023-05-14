import { Component, OnInit } from '@angular/core';
import { InternauteService } from '../../../../service/internaute.service';
import { MagasinService } from '../../../../service/magasin.service';
import { Client } from '../../../../entities/Client';
@Component({
  selector: 'app-dash-internaute',
  templateUrl: './dash-internaute.component.html',
  styleUrls: ['./dash-internaute.component.scss']
})
export class DashInternauteComponent implements OnInit {
  id_internaute:any
  annonces:any=[]
  value:any
  page:number = 1
  client=new Client
  constructor(private magasinService : MagasinService, private internauteService:InternauteService) { }

  ngOnInit(): void {
    this.id_internaute=localStorage.getItem("id_inter");
    this.getProductsAnnonce();
  }
  getProductsAnnonce(){
    this.internauteService.getProductsAnnonce(this.id_internaute).subscribe(res => {
      console.log(res);
      this.annonces=res;
    }) 
  }
  getClientById(){
    this.internauteService.getClientById(this.id_internaute).subscribe(res=>{
      console.log(res);
      this.client.email=res.email;
      this.client.owner=res.Owner;
    })
  }
  search(){
   
  }
  delete(id:any){
    this.magasinService.deleteProduct(id).subscribe(res=>{
      console.log(res);
      this.internauteService.sendUpdate("notifiy")
      this.getProductsAnnonce();
    })
  }
}
