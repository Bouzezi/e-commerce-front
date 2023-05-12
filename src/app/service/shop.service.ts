import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http:HttpClient) { }

  getCategoriesWithSubCategories():Observable<any>{
    return this.http.get('http://localhost:8080/api/category/getAllCategoriesWithSubCategories');
  }
}
