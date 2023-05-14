import { Component, OnInit, ViewChild } from '@angular/core';
import { MagasinService } from '../../../../service/magasin.service';
import { Magasin } from 'src/app/entities/Magasin';
import { ToasterComponent, ToasterPlacement } from '@coreui/angular';
import { AppToastComponent } from 'src/app/views/notifications/toasters/toast-simple/toast.component';

@Component({
  selector: 'app-edit-profile-magasin',
  templateUrl: './edit-profile-magasin.component.html',
  styleUrls: ['./edit-profile-magasin.component.scss']
})
export class EditProfileMagasinComponent implements OnInit {
  @ViewChild(ToasterComponent) toaster!: ToasterComponent;
  placement = ToasterPlacement.TopEnd;
  
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
      this.addToast(`Profile updated`,'success'); 
    }) 
  }

  addToast(con:string,color:string) {   
    const options = {
      title: `Toast`,
      body:con,
      delay: 3000,
      placement: this.placement,
      color: color,
      autohide: true,
    }
    const componentRef = this.toaster.addToast(AppToastComponent, { ...options });
  }
}
