import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpEvent, HttpParams, HttpRequest } from '@angular/common/http';
import { Products } from '../entities/Products';
import { Annonce } from '../entities/Annonce';
import { Coupon } from '../entities/Coupon';

@Injectable({
  providedIn: 'root'
})
export class MagasinService {

  constructor(private http:HttpClient) { }

  private subjectName = new Subject<any>(); //need to create a subject
    
  sendUpdate(list: any) { //the component that wants to update something, calls this fn
      this.subjectName.next(list); //next() will feed the value in Subject
  }
  getUpdate(): Observable<any> { //the receiver component calls this function 
      return this.subjectName.asObservable(); //it returns as an observable to which the receiver funtion will subscribe
  }


  getStoreById(id:any):Observable<Object>{
    return this.http.get('http://localhost:8080/api/magasin/getMagasinById/'+id);
  } 
  updateProfileStore(id:any, data:any){
    return this.http.put('http://localhost:8080/api/magasin/updateMagasin/'+id,data);
  }
  addProduct(product: Products):Observable<any>{
    return this.http.post('http://localhost:8080/api/produit/create',product);
  }
  deleteProduct(id:any){
    return this.http.delete('http://localhost:8080/api/produit/delete/'+id);
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
  getAllProductsByIdClient(id:any):Observable<Object>{
    return this.http.get('http://localhost:8080/api/produit/getProduitByClientId/'+id);
  }
  getProductsNonAnnonce(id:number):Observable<Object>{
    return this.http.get('http://localhost:8080/api/produit/getNonAnnonce/'+id);
  }
  getProductsAnnonce(id:number):Observable<Object>{
    const url = 'http://localhost:8080/api/annonce/getAnnoncer';
    let queryParams = new HttpParams();
    queryParams = queryParams.append("idc",id);
    return this.http.get(url,{params:queryParams});
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
  createCoupon(coupon:Coupon):Observable<any>{
    return this.http.post('http://localhost:8080/api/coupon/create',coupon);
  }
  getCoupons(id:number):Observable<Object>{
    return this.http.get('http://localhost:8080/api/coupon/getByIdClient/'+id);
  }
  updateCoupon(coupon:Coupon):Observable<any>{
    return this.http.post('http://localhost:8080/api/coupon/update',coupon);
  }
}
