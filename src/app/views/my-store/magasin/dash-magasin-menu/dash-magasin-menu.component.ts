import { Component, OnInit } from '@angular/core';
import { MagasinService } from '../../../../service/magasin.service';
@Component({
  selector: 'app-dash-magasin-menu',
  templateUrl: './dash-magasin-menu.component.html',
  styleUrls: ['./dash-magasin-menu.component.scss']
})
export class DashMagasinMenuComponent implements OnInit {
  id_store:any
  totalProducts:any
  nombreAnnonce:any
  selected:boolean=false
  constructor(private magasinService : MagasinService) { }

  ngOnInit(): void {
    this.id_store=localStorage.getItem("id_store");
    this.getTotalProducts();
    this.nombreProduitAnnonce();
  }
  getTotalProducts(){
    this.magasinService.totalNumberOfProductsByClient(this.id_store).subscribe(res => {
      console.log(res);
      this.totalProducts=res;
    }) 
  }
  nombreProduitAnnonce(){
    this.magasinService.nombreProduitAnnonce(this.id_store).subscribe(res => {
      console.log(res);
      this.nombreAnnonce=res;
    }) 
  }
}
