import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/entities/Products'
import { MagasinService } from '../../../../service/magasin.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
produit:any=new Products
id_store:any
subCateg:any
  selectedFiles!: FileList;

  constructor(private magasinService : MagasinService) { }

  ngOnInit(): void {
    this.id_store=localStorage.getItem("id_store");
    this.getAllSubCategories();
    
  }
  getAllSubCategories(){
    this.magasinService.getAllSubCateg().subscribe((res:any)=>{
      console.log(res);
      this.subCateg=res
    })
  }
  addProduct(){
    this.produit.idClient=this.id_store;
    console.log(this.produit);
    this.magasinService.addProduct(this.produit).subscribe(res => {
      console.log(res);
    }) 
    this.upload();
  }
  selectFiles(event :any) {

    const files = event.target.files;
    let isImage = true;
  
    for (let i = 0; i < files.length; i++) {
      if (files.item(i).type.match('image.*')) {
        continue;
      } else {
        isImage = false;
        alert('invalid format!');
        break;
      }
    }

    if (isImage) {
      this.selectedFiles = event.target.files;
      console.log(this.selectedFiles);
      
    } 
  }

  upload() {    
    const uploadData = new FormData();
    for (let index = 0; index < this.selectedFiles.length; index++) {
      uploadData.append('myFiles', this.selectedFiles[index], this.selectedFiles[index].name); 
    }    
    this.magasinService.upload(uploadData).subscribe(res=>{
        console.log(res);
        
    });
  }
  
}
 