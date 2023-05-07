import { Component, OnInit } from '@angular/core';
import { MagasinService } from '../../../../service/magasin.service';
@Component({
  selector: 'app-profile-magasin',
  templateUrl: './profile-magasin.component.html',
  styleUrls: ['./profile-magasin.component.scss']
})
export class ProfileMagasinComponent implements OnInit {
id=3
  constructor(private magasinService : MagasinService) { }

  ngOnInit(): void {
    this.getStoreById();
  }
  getStoreById(){
    this.magasinService.getStoreById(this.id).subscribe(res => {
      console.log(res);
    }) 
  }
}
