import { Component, ElementRef, OnInit } from '@angular/core';
import { ShopService } from '../../../service/shop.service';
import { AnnonceDto } from '../../../entities/AnnonceDto';
import { Client } from '../../../entities/Client';
import { Commande } from '../../../entities/Commande';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-annonce-detail',
  templateUrl: './annonce-detail.component.html',
  styleUrls: ['./annonce-detail.component.scss']
})
export class AnnonceDetailComponent implements OnInit {
  listAnnonces:any=[];
  myListAnnonces:any=[];
  idAnnonce:any
  ann=new AnnonceDto;
  annonce:any;
  i=0;
  images:any=[];
  slides:any=[];
  client=new Client;
  commande=new Commande;
  stls:any=[];
  idProduit:any;
  constructor(private shopService : ShopService,private route: ActivatedRoute,private router:Router) {}

  ngOnInit(): void {
    this.idAnnonce= this.route.snapshot.params['id'];
    this.getAnnonceById();
  }

  getAnnonceById(){
    this.shopService.getAnnonceById(this.idAnnonce).subscribe(res=>{
      console.log(res);
      this.annonce=res;
      this.getClientById(this.annonce.idC)
      this.getAnnonce(); 
    })
  }

    getAnnonce(){
        this.ann.idProd=this.annonce.produit.id;
        this.shopService.getOneImage(this.ann.idProd).subscribe(res=>{
          this.ann.image=res;
        })
        this.shopService.getListImages(this.ann.idProd).subscribe(res=>{
          this.ann.images=res;
          this.images=this.ann.images;
        })
        this.ann.labelle=this.annonce.produit.labelle;
        this.ann.nom_sous_category=this.annonce.produit.sousCategory.nom_sous_category;
        this.ann.dateCreation=this.annonce.dateCreation;
        this.ann.idC=this.annonce.idC;
        this.ann.prix=this.annonce.produit.prix;
        this.ann.description=this.annonce.produit.description;
        this.ann.idAnnonce=this.annonce.id;
        this.ann.idSousCateg=this.annonce.produit.sousCategory.id;
        this.ann.nomAnnonce=this.annonce.nomAnnonce;
        this.idProduit=this.annonce.produit.id;
        this.listAnnonces.push(this.ann);
        this.FindByAnnonceSousCategoryLimit(this.ann.idSousCateg);
       
    }

    getAnnoncesList(myListAnnonce:any){
      myListAnnonce.forEach( (e:any) => {
        let ann=new AnnonceDto
        ann.idProd=e.produit.id;
        this.shopService.getOneImage(ann.idProd).subscribe(res=>{
          ann.image=res;
        })
        ann.labelle=e.produit.labelle;
        ann.nom_sous_category=e.produit.sousCategory.nom_sous_category;
        ann.idSousCateg=e.produit.sousCategory.id;
        ann.dateCreation=e.dateCreation;
        ann.idC=e.idC;
        ann.prix=e.produit.prix;
        ann.description=e.produit.description;
        ann.idAnnonce=e.id;
        ann.nomAnnonce=e.nomAnnonce;
        this.myListAnnonces.push(ann);
    });  
  }

    getSlide() {
        return this.images[this.i];
    }

    getPrev() {
        this.i = this.i===0 ? 0 : this.i - 1;
    }  
    getNext() {
        this.i = this.i===this.images.length-1 ? this.i : this.i + 1;
    }

    FindByAnnonceSousCategoryLimit(id:any){
      this.shopService.FindByAnnonceSousCategoryLimit(id).subscribe(
        (res)=>{
          console.log(res);
          this.slides=res;
          this.getAnnoncesList(this.slides)
        },
        (err)=>{

        }
      )
    }
    getClientById(id:any){
      this.shopService.getClientById(id).subscribe(res=>{
        console.log(res);
        this.client.id=res.id;
        this.client.owner=res.Owner;
        this.client.adresse=res.adresse;
        this.client.tel=res.tel;
        this.client.email=res.email;
      })   
    }

    navigateToProductDetails(id: any) {
      this.router.navigateByUrl('/my-site//product-details',id)
    }
    getStl(){
      this.shopService.getAllSocietesLivraison().subscribe(res=>{
        console.log(res);
        this.stls=res;
      })
    }
    addCommande(){
      this.commande.idProd=this.idProduit;
      console.log(this.idProduit);
      this.shopService.addCommande(this.commande).subscribe(res=>{
        console.log(res);
      })
    }
}
