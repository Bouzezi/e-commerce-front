import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Internaute } from '../entities/Internaute';

@Injectable({
  providedIn: 'root'
})
export class InternauteService {

  constructor(private http:HttpClient) { }

  private subjectName = new Subject<any>(); //need to create a subject
    
  sendUpdate(annonce: any) { //the component that wants to update something, calls this fn
      this.subjectName.next(annonce); //next() will feed the value in Subject
  }
  getUpdate(): Observable<any> { //the receiver component calls this function 
      return this.subjectName.asObservable(); //it returns as an observable to which the receiver funtion will subscribe
  }
  nombreProduitAnnonce(id:number):Observable<Object>{
    return this.http.get('http://localhost:8080/api/produit/countByClientIdAndStatut/'+id);
  }
  
  getProductsAnnonce(id:number):Observable<Object>{
    const url = 'http://localhost:8080/api/annonce/getAnnoncer';
    let queryParams = new HttpParams();
    queryParams = queryParams.append("idc",id);
    return this.http.get(url,{params:queryParams});
  }
  getClientById(id:number):Observable<any>{
    return this.http.get('http://localhost:8080/api/client/getClientById/'+id);
  }
  getInternaute(id:number):Observable<any>{
    return this.http.get('http://localhost:8080/api/internaute/getInternabyteById/'+id);
  }
  updateInternaute(id:number,internaute:Internaute):Observable<any>{
    return this.http.put('http://localhost:8080/api/internaute/updateInternaute/'+id,internaute);
  }
}
