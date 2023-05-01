import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';
import { DashboardService } from 'src/app/service/dashboard.service';
import {MatDialogRef} from  '@angular/material/dialog' ;
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Category } from 'src/app/entities/category';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  msg!:string;
  category !:Category;
categoryForm!: FormGroup;
  constructor(private Myservice:DashboardService,private fb:FormBuilder,
    private dialogRef:MatDialogRef<AddCategoryComponent>,@Inject(MAT_DIALOG_DATA) public myData: {title:string,id: number}) {
    }

  ngOnInit(): void {
    this.category=new Category();
    this.categoryForm=this.fb.group({
      name : ['',Validators.required]
    });

     console.log(this.myData.id);
    if(this.myData.id != -1)
    this.getOneCategory(); 

    
  }
  manageCategory(){    
     if(this.myData.id != -1)
    this.updateCategory();
    else 
    this.addCategory();

  }
  addCategory(){
    console.log(this.categoryForm.value);
    
    this.Myservice.addCategory(this.categoryForm.value).subscribe((data:any)=>{
          console.log(data);
          this.Myservice.msg='category is added successfully';
          this.categoryForm.reset();
    },(error:any)=>{
      console.log(error);
      this.Myservice.msg='there is an error with adding category';
    } 
    );
    console.log(this.Myservice.msg);
        
  }
  getOneCategory(){
    this.Myservice.getOneCategory(this.myData.id).subscribe((data:any)=>{
      console.log(data);
      this.categoryForm.get('name')?.setValue(data.name);
    },(error:any)=> console.log(error)
    );

  }
  updateCategory(){
    this.category.id=this.myData.id;
    this.category.name=this.categoryForm.value.name;
    
       this.Myservice.updateCategory(this.category).subscribe((data:any)=>{
        console.log(data);
        this.Myservice.msg='category is updated successfully';
      },(error:any)=>{
        console.log(error);
        this.Myservice.msg='there is an error with updating category';
      }
      );
      console.log(this.Myservice.msg); 
  }
  
}

