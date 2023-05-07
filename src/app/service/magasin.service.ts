import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Magasin } from '../entities/Magasin';

@Injectable({
  providedIn: 'root'
})
export class MagasinService {

  constructor(private http:HttpClient) { }

  getStoreById(id:any){
    return this.http.get('http://localhost:8080/api/magasin/getMagasinById/'+id);
  }
  deleteRenter(id:any){
    return this.http.delete('http://127.0.0.1:8000/locataires/'+id);
  }
  updateRenter(id:any, data:any){
    return this.http.put('http://127.0.0.1:8000/locataires/'+id,data);
  }
  listeLocataires():Observable<Object>{
    return this.http.get('http://127.0.0.1:8000/locataires/');
  }
}
