import { Component, OnInit } from '@angular/core';
import { MagasinService } from '../../../../service/magasin.service';
import { Subscription } from 'rxjs';
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
  private subscriptionName: Subscription; //important to create a subscription
  constructor(private magasinService : MagasinService) { 
    this.subscriptionName= this.magasinService.getUpdate().subscribe(res => { 
              this.getTotalProducts();
              this.nombreProduitAnnonce();
             });
   }

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
