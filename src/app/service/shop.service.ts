import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Commande } from '../entities/Commande';
@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http:HttpClient) { }

  private subjectName = new Subject<any>(); //need to create a subject
    
  sendUpdate(annonce: any) { //the component that wants to update something, calls this fn
      this.subjectName.next(annonce); //next() will feed the value in Subject
  }
  getUpdate(): Observable<any> { //the receiver component calls this function 
      return this.subjectName.asObservable(); //it returns as an observable to which the receiver funtion will subscribe
  }

  getCategoriesWithSubCategories():Observable<any>{
    return this.http.get('http://localhost:8080/api/category/getAllCategoriesWithSubCategories');
  }
  
  FindAllByOrderByDateCreationDesc():Observable<any>{
    return this.http.get('http://localhost:8080/api/annonce/getAllAnnonceORderByDate');
  }
  getOneImage(id:number):Observable<any>{
    return this.http.get('http://localhost:8080/api/image/getOneImage/'+id);
  }
  getListImages(id:number):Observable<any>{
    return this.http.get('http://localhost:8080/api/image/getImages/'+id);
  }
  getAnnonceById(id:number):Observable<any>{
    return this.http.get('http://localhost:8080/api/annonce/getAnnonceById/'+id);
  }
  FindByAnnonceSousCategoryLimit(id:any):Observable<Object>{
    const url = 'http://localhost:8080/api/produit/FindByAnnonceSousCategoryLimit';
    let queryParams = new HttpParams();
    queryParams = queryParams.append("v1",id);
    return this.http.get(url,{params:queryParams});
  }

  getClientById(id:number):Observable<any>{
    return this.http.get('http://localhost:8080/api/client/getClientById/'+id);
  }
  addCommande(commande:Commande):Observable<any>{
    return this.http.post('http://localhost:8080/api/commande/create',commande);
  }
  getAllSocietesLivraison():Observable<any>{
    return this.http.get('http://localhost:8080/api/stelivraison/getAllSteLivraison');
  }
}
