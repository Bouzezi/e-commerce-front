import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { SiteParam } from '../entities/siteParam';
import { Category } from '../entities/category';
import { FormGroup } from '@angular/forms';
import { Product } from '../entities/Product';
import { DeliveryCompany } from '../entities/stl';
import { SubCategory } from '../entities/subCategory';
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
     return this.http.post<any>('http://localhost:8080/api/category/createCategory',form).pipe(
      tap(()=>{
        this.refreshCategory.next();
      })
    ); 
  }
  getAllCategories():Observable<Category>{
    return this.http.get<Category>('http://localhost:8080/api/category/getAllcategory');
  }
  getOneCategory(id:number):Observable<Category>{
    return this.http.get<Category>('http://localhost:8080/api/category/getCategoryByID/'+id);
  }
  deleteCategory(id:number):Observable<object>{
    return this.http.delete('http://localhost:8080/api/category/deleteCategoryById/'+id).pipe(
      tap(()=>{
        this.refreshCategory.next(); 
      })
    );
  }
  updateCategory(categ:Category):Observable<Category>{
    return this.http.put<Category>('http://localhost:8080/api/category/updateCategoryByID/'+categ.id,categ).pipe(
      tap(()=>{
        this.refreshCategory.next();
      })
    );
  }

  addProduct(form : SubCategory):Observable<object>{
    return this.http.post('http://localhost:8000/api/SousCategory/createSousCategory',form);
 }
 getAllProducts():Observable<object>{
   return this.http.get('http://localhost:8080/api/SousCategory/getAllSousCategory');
 }
 getOneProduct(id:number):Observable<object>{
   return this.http.get('http://localhost:8080/api/SousCategory/getSousCategoryById/'+id);
 }
 deleteProduct(id:number):Observable<object>{
   return this.http.get('http://localhost:8080/api/SousCategory/delete/'+id).pipe(
     tap(()=>{
       this._refreshProduct.next(); 
     })
   );
 }
 updateProduct(prod:SubCategory):Observable<object>{
   return this.http.put('http://localhost:8080/api/SousCategory/product/edit/'+prod.id,prod).pipe(
     tap(()=>{
       this._refreshProduct.next();
     })
   );
 }

 addDelivery(delivery:DeliveryCompany):Observable<any>{
  return this.http.post<any>('http://localhost:8080/api/stelivraison/create',delivery);
 }
 addSubCateg(subcateg: SubCategory):Observable<any>{
  return this.http.post<any>('http://localhost:8080/api/SousCategory/createSousCategory',subcateg).pipe(
    tap(()=>{
      this._refreshProduct.next();
    })
  );
 }
  updateSubCateg(subcateg: SubCategory) :Observable<any>{
    return this.http.put('http://localhost:8080/api/SousCategory/updateSousCategory/'+subcateg.id,subcateg);
   }
    /*
  getOneSubCateg(id: number) :Observable<any>{
    return this.http.get<any>('http://localhost:8080/api/SousCategory/getSousCategoryById/'+id);
   }
  
   deleteSubCateg(id:number):Observable<object>{
    return this.http.delete<any>('http://localhost:8080/api/SousCategory/deleteSousCategory'+id);
  }
  getAllSubCateg():Observable<Product>{
    return this.http.get<Product>('http://localhost:8080/api/SousCategory/getAllSousCategory');
  } */
/*   updateSubCateg(subcateg: SubCategory):Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/SousCategory/updateSousCategory/'+subcateg.id,subcateg).pipe(
      tap(()=>{
        this._refreshProduct.next();
      })
    );
   } */
}
