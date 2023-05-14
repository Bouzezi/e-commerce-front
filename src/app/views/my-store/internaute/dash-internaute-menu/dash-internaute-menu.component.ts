import { Component, OnInit } from '@angular/core';
import { InternauteService } from '../../../../service/internaute.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-dash-internaute-menu',
  templateUrl: './dash-internaute-menu.component.html',
  styleUrls: ['./dash-internaute-menu.component.scss']
})
export class DashInternauteMenuComponent implements OnInit {
  id_internaute:any
  nombreAnnonce:any
  selected:boolean=false
  private subscriptionName: Subscription; //important to create a subscription
  constructor(private internauteService:InternauteService) { 
    this.subscriptionName= this.internauteService.getUpdate().subscribe(res => { 
      this.nombreProduitAnnonce();
     });
  }

  ngOnInit(): void {
    this.id_internaute=localStorage.getItem("id_inter");
    this.nombreProduitAnnonce();
  }

  nombreProduitAnnonce(){
    this.internauteService.nombreProduitAnnonce(this.id_internaute).subscribe(res => {
      console.log(res);
      this.nombreAnnonce=res;
    }) 
  }
}
