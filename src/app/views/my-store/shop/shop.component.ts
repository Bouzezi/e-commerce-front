import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../../service/shop.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
listCat:any=[];
hide:boolean=false;
  constructor(private shopService : ShopService) { }

  ngOnInit(): void {
    this.getCategoriesWithSubCategories();
  }

  getCategoriesWithSubCategories(){
    this.shopService.getCategoriesWithSubCategories().subscribe(res=>{
      console.log(res);
      this.listCat=res;
    })
  }
  toggle(){
    if(this.hide==false)
    this.hide=true;
    else
    this.hide=false;
  }

}
