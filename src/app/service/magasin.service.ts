import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Products } from '../entities/Products';
import { Annonce } from '../entities/Annonce';

@Injectable({
  providedIn: 'root'
})
export class MagasinService {

  constructor(private http:HttpClient) { }

  getStoreById(id:any):Observable<Object>{
    return this.http.get('http://localhost:8080/api/magasin/getMagasinById/'+id);
  } 
/*   deleteRenter(id:any){
    return this.http.delete('http://127.0.0.1:8000/locataires/'+id);
  } */
  updateProfileStore(id:any, data:any){
    return this.http.put('http://localhost:8080/api/magasin/updateMagasin/'+id,data);
  }
  addProduct(product: Products):Observable<any>{
    return this.http.post('http://localhost:8080/api/produit/create',product);
  }
  upload(data:FormData){
    return this.http.post('http://localhost:8080/api/produit/upload-images',data)
  }
  getImages(id:number):Observable<any>{
    return this.http.get('http://localhost:8080/api/image/getImages/'+id);
  }
  getAllSubCateg():any{
    return this.http.get('http://localhost:8080/api/SousCategory/getAllSousCategory');
  }
  getAllProductsByIdClient():Observable<Object>{
    return this.http.get('http://localhost:8080/api/produit');
  }
  getProductsNonAnnonce(id:number):Observable<Object>{
    return this.http.get('http://localhost:8080/api/produit/getNonAnnonce/'+id);
  }
  getProductsAnnonce(id:number):Observable<Object>{
    return this.http.get('http://localhost:8080/api/annonce/getAnnoncer/'+id);
  }
  createAnnonce(annonce: Annonce):Observable<any>{
    return this.http.post('http://localhost:8080/api/annonce/annonces',annonce);
  }
  totalNumberOfProductsByClient(id:number):Observable<Object>{
    return this.http.get('http://localhost:8080/api/produit/CountByIdCLient/'+id);
  }
  nombreProduitAnnonce(id:number):Observable<Object>{
    return this.http.get('http://localhost:8080/api/produit/countByClientIdAndStatut/'+id);
  }
}
