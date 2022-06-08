import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categories } from '../categorie';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-categories-details',
  templateUrl: './categories-details.component.html',
  styleUrls: ['./categories-details.component.css']
})
export class CategoriesDetailsComponent implements OnInit {
id:Number
categorie:Categories
  constructor(private router:Router,private route:ActivatedRoute,private CategoriesService:CategoriesService) { }

  ngOnInit(): void {
    this.router.navigate(['/categories']) 
    this.id=this.route.snapshot.params['id'];
    this.categorie=new Categories();
    this.CategoriesService.getCategorieById(this.id).subscribe(data=>{
      this.categorie=data;

    });
  }

}
