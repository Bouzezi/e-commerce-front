import { Component, OnInit } from '@angular/core';
import { MagasinService } from '../../../../service/magasin.service';
import { Magasin } from 'src/app/entities/Magasin';

@Component({
  selector: 'app-dash-magasin',
  templateUrl: './dash-magasin.component.html',
  styleUrls: ['./dash-magasin.component.scss']
})
export class DashMagasinComponent implements OnInit {
  id_store:any
  magasin:any=new Magasin
    constructor(private magasinService : MagasinService) { }
  
    ngOnInit(): void {
      this.id_store=localStorage.getItem("id_store");
      this.getStoreById(this.id_store);
    }
    getStoreById(id:any){
      this.magasinService.getStoreById(id).subscribe(res => {
        console.log(res);
        this.magasin=res;
      }) 
    }

}
