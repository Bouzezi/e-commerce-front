import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from  '@angular/material/dialog' ;
import { Category } from 'src/app/entities/category';
import { DashboardService } from 'src/app/service/dashboard.service';
import { AddCategoryComponent } from '../add-category/add-category.component';
import {ToasterComponent, ToasterPlacement } from '@coreui/angular';
import { AppToastComponent } from '../../notifications/toasters/toast-simple/toast.component';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';


@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  @ViewChild(ToasterComponent) toaster!: ToasterComponent;
  placement = ToasterPlacement.TopEnd;

  displayedColumns: string[] = ['id','name','action'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  categories:Category[]=[];
  msg:string='';
  constructor(private Myservice:DashboardService,public dialog:MatDialog,private _liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void {
    this.getCategories();
    this.Myservice.refreshCategory.subscribe(result=>{
      this.getCategories();
    })
    this.msg=this.Myservice.msg;
  }

  Add () {
    const dialogRef = this.dialog.open(AddCategoryComponent,{
      height: '200px',
      width: '300px',
      data: {title: 'Add Category',id:-1}
    });
    /* dialogRef.afterClosed (). subscribe ( result => {
      console.log(result);
       if(result!=undefined){
        this.msg=result;
      } 
      
   });  */ 
  }
  getCategories(){
    this.Myservice.getAllCategories().subscribe((data:any) => {
      console.log(data);  
       for (const key in data) {
        if (data.hasOwnProperty(key)) {
          this.categories.push(data[key]);
        }
      } 
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  update (id:number) {
    const dialogRef = this.dialog.open(AddCategoryComponent,{
      height: '200px',
      width: '300px',
      data: {title: 'Update Category',id: id}
    }); 
  }
  delete(id:number){
    this.Myservice.deleteCategory(id).subscribe((data:any)=>{
      console.log(data);
      },(error:any)=> console.log(error)
      );
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
