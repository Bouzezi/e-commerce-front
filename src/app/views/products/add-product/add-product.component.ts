import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/entities/Product';
import { DashboardService } from 'src/app/service/dashboard.service';
import {MatDialogRef} from  '@angular/material/dialog' ;
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Category } from 'src/app/entities/category';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  msg!:string;
  product !:Product;
productForm!: FormGroup;
categories:Category[]=[];
  constructor(private Myservice:DashboardService,private fb:FormBuilder,
    private dialogRef:MatDialogRef<AddProductComponent>,@Inject(MAT_DIALOG_DATA) public myData: {title:string,id: number}) {
    }

  ngOnInit(): void {
    this.getCategories();
    this.product=new Product();
    this.productForm=this.fb.group({
      libelle : ['',Validators.required],
      description : ['',Validators.required],
      price : ['',Validators.required],
      categories : ['',Validators.required]
    });
    console.log(this.categories);
    
     console.log(this.myData.id);
    if(this.myData.id != -1)
    this.getOneProduct(); 

    
  }
  getCategories(){
    this.Myservice.getAllCategories().subscribe((data:any) => {
      console.log(data);  
       for (const key in data) {
        if (data.hasOwnProperty(key)) {
          this.categories.push(data[key]);
        }
      } 
    });
  }

  manageProduct(){    
     if(this.myData.id != -1)
    this.updateProduct();
    else 
    this.addProduct();

  }
  addProduct(){
    console.log(this.productForm.value);
    
    this.Myservice.addProduct(this.productForm.value).subscribe((data:any)=>{
          console.log(data);
          this.Myservice.msg='product is added successfully';
          this.productForm.reset();
    },(error:any)=>{
      console.log(error);
      this.Myservice.msg='there is an error with adding product';
    } 
    );
    console.log(this.Myservice.msg);
        
  }
  getOneProduct(){
    this.Myservice.getOneProduct(this.myData.id).subscribe((data:any)=>{
      console.log(data);
      this.productForm.get('libelle')?.setValue(data.libelle);
      this.productForm.get('description')?.setValue(data.description);
      this.productForm.get('price')?.setValue(data.prix);
      this.productForm.get('categories')?.setValue(data.category[0]);
    },(error:any)=> console.log(error)
    );
    
  }
  updateProduct(){
    this.product.id=this.myData.id;
    this.product.libelle=this.productForm.value.libelle;
    this.product.description=this.productForm.value.description;
    this.product.price=this.productForm.value.price;
    this.product.categories=this.productForm.value.categories;
    console.log(this.product);
    
       this.Myservice.updateProduct(this.product).subscribe((data:any)=>{
        console.log(data);
        this.Myservice.msg='product is updated successfully';
      },(error:any)=>{
        console.log(error);
        this.Myservice.msg='there is an error with updating product';
      }
      );
      console.log(this.Myservice.msg); 
  }

}
