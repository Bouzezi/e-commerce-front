import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Internaute } from '../entities/Internaute';
import { Observable } from 'rxjs';
import { Magasin } from '../entities/Magasin';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  addInternaute(internaute: Internaute):Observable<any>{
    return this.http.post('http://localhost:8080/api/internaute/createInternaute',internaute);
  }
  addMagasin(magasin: Magasin):Observable<any>{
    return this.http.post('http://localhost:8080/api/magasin/createMagasin',magasin);
  }
}
