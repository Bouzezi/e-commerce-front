import { Component, OnInit, ViewChild } from '@angular/core';
import { Internaute } from '../../../../entities/Internaute';
import { AppToastComponent } from 'src/app/views/notifications/toasters/toast-simple/toast.component';
import { ToasterComponent, ToasterPlacement } from '@coreui/angular';
import { InternauteService } from '../..//../../service/internaute.service';

@Component({
  selector: 'app-edit-profile-internaute',
  templateUrl: './edit-profile-internaute.component.html',
  styleUrls: ['./edit-profile-internaute.component.scss']
})
export class EditProfileInternauteComponent implements OnInit {
  @ViewChild(ToasterComponent) toaster!: ToasterComponent;
  placement = ToasterPlacement.TopEnd;
internaute=new Internaute
id_inter:any;
  constructor( private internauteService:InternauteService) { }

  ngOnInit(): void {
    this.id_inter=localStorage.getItem("id_inter");
    this.internaute.id=this.id_inter;
    this.getInternaute();
  }
  updateProfileInternaute(){
    this.internauteService.updateInternaute(this.internaute.id,this.internaute).subscribe(res=>{
      console.log(res);
      this.addToast(`Profile updated`,'success');
    })
  }
  getInternaute(){
    this.internauteService.getInternaute(this.internaute.id).subscribe(res=>{
      this.internaute.adresse=res.adresse;
      this.internaute.email=res.email;
      this.internaute.password=res.password;
      this.internaute.tel=res.tel;
      this.internaute.prenom=res.prenom;
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
