import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/entities/Product';
import { DashboardService } from 'src/app/service/dashboard.service';
import {MatDialogRef} from  '@angular/material/dialog' ;
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Category } from 'src/app/entities/category';
import { SubCategory } from 'src/app/entities/subCategory';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  msg!:string;
  subcateg=new SubCategory;
productForm!: FormGroup;
idCategory:Category[]=[];
  constructor(private Myservice:DashboardService,private fb:FormBuilder,
    private dialogRef:MatDialogRef<AddProductComponent>,@Inject(MAT_DIALOG_DATA) public myData: {title:string,id: number}) {
    }

  ngOnInit(): void {
    this.getCategories();
    this.productForm=this.fb.group({
      NomSousCategory : ['',Validators.required],
      idCategory : ['',Validators.required]
    });
    console.log(this.idCategory);
    
     console.log(this.myData.id);
    if(this.myData.id != -1)
    this.getOneProduct(); 

    
  }
  getCategories(){
    this.Myservice.getAllCategories().subscribe((data:any) => {
      console.log(data);  
       for (const key in data) {
        if (data.hasOwnProperty(key)) {
          this.idCategory.push(data[key]);
        }
      } 
    });
  }

  manageProduct(){    
     if(this.myData.id != -1)
    this.updateSubCateg();
    else 
    this.addSubCateg();

  }
  addProduct(){
    console.log(this.productForm.value);
    this.subcateg.NomSousCategory=this.productForm.get('NomSousCategory')?.value;
    this.subcateg.idCategory=this.productForm.get('idCategory')?.value;
    console.log(this.subcateg);
    
    this.Myservice.addProduct(this.subcateg).subscribe((data:any)=>{
          console.log(data);
          //this.Myservice.msg='product is added successfully';
          this.productForm.reset();
    },(error:any)=>{
      console.log(error);
      //this.Myservice.msg='there is an error with adding product';
    } 
    );
    //console.log(this.Myservice.msg);
        
  }
  addSubCateg(){
    this.subcateg.NomSousCategory=this.productForm.get('NomSousCategory')?.value;
    this.subcateg.idCategory=this.productForm.get('idCategory')?.value;
    console.log(this.subcateg);
    this.Myservice.addSubCateg(this.subcateg).subscribe(res=>{
      console.log(res);
      
    })
  }
  getOneProduct(){
    this.Myservice.getOneProduct(this.myData.id).subscribe((data:any)=>{
      console.log(data);
      this.productForm.get('NomSousCategory')?.setValue(data.nom_sous_category);
      this.productForm.get('idCategory')?.setValue(data.category[0]);
    },(error:any)=> console.log(error)
    );
    
  }
  updateSubCateg(){
    this.subcateg.id=this.myData.id;
    this.subcateg.NomSousCategory=this.productForm.get('NomSousCategory')?.value;
    console.log(this.subcateg);
    
       this.Myservice.updateSubCateg(this.subcateg).subscribe((data:any)=>{
        console.log(data);
      },(error:any)=>{
        console.log(error);
      }
      );
      window.location.reload();
  }

}
