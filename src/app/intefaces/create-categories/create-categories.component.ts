import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categories } from '../categorie';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-create-categories',
  templateUrl: './create-categories.component.html',
  styleUrls: ['./create-categories.component.css']
})
export class CreateCategoriesComponent implements OnInit {
  categories: Categories=new Categories();
  constructor(private categoriesService:CategoriesService,
    private router:Router) { }

  ngOnInit(): void {
    
  }
  saveCategorie(){
    this.categoriesService.createCategorie(this.categories).subscribe(data=>{
      console.log(data);
      this.goToCategoriesList();
    },error=>console.log(error));
  }
  goToCategoriesList(){
    this.router.navigate(['/categories'])
  }
  onSubmit(){
    console.log(this.categories);
    this.saveCategorie();
  }

}
