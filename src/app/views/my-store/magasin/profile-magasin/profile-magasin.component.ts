import { Component, OnInit } from '@angular/core';
import { MagasinService } from '../../../../service/magasin.service';
import { Magasin } from 'src/app/entities/Magasin';
@Component({
  selector: 'app-profile-magasin',
  templateUrl: './profile-magasin.component.html',
  styleUrls: ['./profile-magasin.component.scss']
})
export class ProfileMagasinComponent implements OnInit {
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
