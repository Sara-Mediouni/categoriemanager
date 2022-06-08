import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categories } from '../categorie';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-update-categories',
  templateUrl: './update-categories.component.html',
  styleUrls: ['./update-categories.component.css']
})
export class UpdateCategoriesComponent implements OnInit {
 
  id: Number;
  categories:Categories=new Categories();
  constructor(private categorieService:CategoriesService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.categorieService.getCategorieById(this.id).subscribe(data=>{
      this.categories=data;

    },
    error=>console.log(error));
  }
onSubmit(){
  this.categorieService.updateCategorie(this.id,this.categories).subscribe(data=>
    {
      this.goToCategorieList();
    },
    error=>console.log(error));
}
  goToCategorieList() {
    this.router.navigate(['/categories']);
  }

}
