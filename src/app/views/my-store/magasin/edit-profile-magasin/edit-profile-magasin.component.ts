import { Component, OnInit } from '@angular/core';
import { MagasinService } from '../../../../service/magasin.service';
import { Magasin } from 'src/app/entities/Magasin';

@Component({
  selector: 'app-edit-profile-magasin',
  templateUrl: './edit-profile-magasin.component.html',
  styleUrls: ['./edit-profile-magasin.component.scss']
})
export class EditProfileMagasinComponent implements OnInit {
  id_store:any;
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

  updateProfileStore(){
    this.magasinService.updateProfileStore(this.id_store,this.magasin).subscribe(res => {
      console.log(res);
    }) 
  }
}
