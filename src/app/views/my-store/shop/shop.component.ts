import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../../service/shop.service';
import { AnnonceDto } from '../../../entities/AnnonceDto';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
page:number = 1
listCat:any=[];
listAnnonces:any=[];
annonces:any=[];
image:any
  constructor(private shopService : ShopService) { }

  ngOnInit(): void {
    this.getCategoriesWithSubCategories();
    this.FindAllByOrderByDateCreationDesc();    
  }

  getCategoriesWithSubCategories(){
    this.shopService.getCategoriesWithSubCategories().subscribe(res=>{
      console.log(res);
      this.listCat=res;
    })
  }

  FindAllByOrderByDateCreationDesc(){
    this.shopService.FindAllByOrderByDateCreationDesc().subscribe(res=>{
      console.log(res);
      this.annonces=res;
      this.getAnnoncesList();
    })
  }

  getAnnoncesList(){
      this.annonces.forEach( (e:any) => {
        let ann=new AnnonceDto
        ann.idProd=e.produit.id;
        this.shopService.getOneImage(ann.idProd).subscribe(res=>{
          ann.image=res;
        })
        ann.labelle=e.produit.labelle;
        ann.nom_sous_category=e.produit.sousCategory.nom_sous_category;
        ann.dateCreation=e.dateCreation;
        ann.idC=e.idC;
        ann.prix=e.produit.prix;
        ann.description=e.produit.description;
        ann.idAnnonce=e.id;
        this.listAnnonces.push(ann);
    });  
  }

  getCurrentAnnonce(annonce:AnnonceDto){
      this.shopService.sendUpdate(annonce);
  }

}
