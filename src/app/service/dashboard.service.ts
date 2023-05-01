import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { SiteParam } from '../entities/siteParam';
import { Category } from '../entities/category';
import { FormGroup } from '@angular/forms';
import { Product } from '../entities/Product';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
themeId:number=1;
  private _refreshCategory=new Subject<void>();
  get refreshCategory(){
    return this._refreshCategory;
  }
  
  private _refreshProduct=new Subject<void>();
  get refreshProduct(){
    return this._refreshProduct;
  }
  
  msg:string='';

constructor(private http:HttpClient) {};


  getAllThemes():Observable<object>{
    return this.http.get('http://localhost:8000/theme');
  }
  getSiteParam():Observable<object>{
    return this.http.get('http://localhost:8000/ParamSite');
  }
  getlogo():Observable<object>{
    return this.http.get('http://localhost:8000/ParamSite/getLogo',{ responseType: 'blob' });
  }
  addThemeParamSite(siteParam: SiteParam):Observable<object>{
    return this.http.post('http://localhost:8000/ParamSite/new',siteParam);
  }
  changeThemeParamSite(siteParam: SiteParam):Observable<any>{
    return this.http.put('http://localhost:8000/ParamSite/updateTheme',siteParam);
  }
  getParamSite():Observable<object>{
    return this.http.get('http://localhost:8000/ParamSite');
  }
  checkParamSite():Observable<object>{
    return this.http.get('http://localhost:8000/ParamSite/check');
  }
  dashbord():Observable<object>{
    return this.http.get('http://localhost:8000/dashbord/');
  }
  ShopNameSettings(formData : FormData):Observable<any> {
    return this.http.post('http://localhost:8000/ParamSite/upload', formData);
  }
  updateShopNameSettings(formData : FormData):Observable<object>{
    return this.http.put('http://localhost:8000/ParamSite/edit/1',formData);
  }
  addCategory(form : FormGroup):Observable<any>{
     return this.http.post<any>('http://localhost:8000/category/new',form).pipe(
      tap(()=>{
        this.refreshCategory.next();
      })
    ); 
  }
  getAllCategories():Observable<Category>{
    return this.http.get<Category>('http://localhost:8000/category/');
  }
  getOneCategory(id:number):Observable<Category>{
    return this.http.get<Category>('http://localhost:8000/category/'+id);
  }
  deleteCategory(id:number):Observable<object>{
    return this.http.delete('http://localhost:8000/category/delete/'+id).pipe(
      tap(()=>{
        this.refreshCategory.next(); 
      })
    );
  }
  updateCategory(categ:Category):Observable<Category>{
    return this.http.put<Category>('http://localhost:8000/category/edit/'+categ.id,categ).pipe(
      tap(()=>{
        this.refreshCategory.next();
      })
    );
  }

  addProduct(form : FormGroup):Observable<any>{
    return this.http.post<any>('http://localhost:8000/product/new',form).pipe(
     tap(()=>{
       this._refreshProduct.next();
     })
   ); 
 }
 getAllProducts():Observable<Product>{
   return this.http.get<Product>('http://localhost:8000/product');
 }
 getOneProduct(id:number):Observable<Product>{
   return this.http.get<Product>('http://localhost:8000/product/'+id);
 }
 deleteProduct(id:number):Observable<object>{
   return this.http.delete('http://localhost:8000/product/delete/'+id).pipe(
     tap(()=>{
       this._refreshProduct.next(); 
     })
   );
 }
 updateProduct(prod:Product):Observable<Product>{
   return this.http.put<Product>('http://localhost:8000/product/edit/'+prod.id,prod).pipe(
     tap(()=>{
       this._refreshProduct.next();
     })
   );
 }

}
