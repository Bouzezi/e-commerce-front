import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShopService } from '../../../service/shop.service';
import { AnnonceDto } from '../../../entities/AnnonceDto';
@Component({
  selector: 'app-annonce-detail',
  templateUrl: './annonce-detail.component.html',
  styleUrls: ['./annonce-detail.component.scss']
})
export class AnnonceDetailComponent implements OnInit {
   subscriptionName!: Subscription; //important to create a subscription
  myAnnonce:any
  constructor(private shopService : ShopService) {
    
   }

  ngOnInit(): void {
    this.subscriptionName= this.shopService.getUpdate().subscribe(res => { 
      this.myAnnonce=res;
   });
    console.log(this.myAnnonce);
    
  }

}
