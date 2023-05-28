import { Component, OnInit, ViewChild } from '@angular/core';

import {ToasterComponent, ToasterPlacement } from '@coreui/angular';
import { AppToastComponent } from '../../notifications/toasters/toast-simple/toast.component';
import { Product } from 'src/app/entities/Product';
import {MatDialog} from  '@angular/material/dialog' ;
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { DashboardService } from 'src/app/service/dashboard.service';
import { AddProductComponent } from '../add-product/add-product.component';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @ViewChild(ToasterComponent) toaster!: ToasterComponent;
  placement = ToasterPlacement.TopEnd;

  displayedColumns: string[] = ['id','Name','action'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  products:Product[]=[];
  msg:string='';
  constructor(private Myservice:DashboardService,public dialog:MatDialog,private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {
    this.getProducts();
    this.Myservice.refreshProduct.subscribe(result=>{
      this.getProducts();
    })
    this.msg=this.Myservice.msg;
  }

  Add () {
    const dialogRef = this.dialog.open(AddProductComponent,{
      height: '350px',
      width: '350px',
      data: {title: 'Add Sub-Catégorie',id:-1}
    });
    /* dialogRef.afterClosed (). subscribe ( result => {
      console.log(result);
       if(result!=undefined){
        this.msg=result;
      } 
      
   });  */ 
  }
  getProducts(){
    this.Myservice.getAllProducts().subscribe((data:any) => {
      console.log(data);  
       for (const key in data) {
        if (data.hasOwnProperty(key)) {
          this.products.push(data[key]);
        }
      } 
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  update (id:number) {
    const dialogRef = this.dialog.open(AddProductComponent,{
      height: '350px',
      width: '350px',
      data: {title: 'Update Sub-Category',id: id}
    }); 
  }
  delete(id:number){
    this.Myservice.deleteProduct(id).subscribe((data:any)=>{
      console.log(data);
      
      },(error:any)=> console.log(error)
      );
      window.location.reload();
  }
  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addToast(con:string,color:string) {   
    const options = {
      title: `Toast`,
      body:con,
      delay: 3000,
      placement: this.placement,
      color: color,
      autohide: true,
    }
    const componentRef = this.toaster.addToast(AppToastComponent, { ...options });
  }


}
