import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categories } from '../categorie';
import { CategoriesService } from '../categories.service';
import { Produits } from '../produits';
import { ProduitsService } from '../produits.service';
@Component({
  selector: 'app-produitslist',
  templateUrl: './produitslist.component.html',
  styleUrls: ['./produitslist.component.css']
})
export class ProduitslistComponent implements OnInit {
  p:Produits[];
  data:[][];
  id: Number;
  produits:Produits=new Produits();
  constructor(private produitsService:ProduitsService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
   this.getProduits();
  }
  getProduits(){
    this.id=this.route.snapshot.params['id'];
    this.produitsService.findbycat(this.id).subscribe(data=>{
      this.p=data;

    });
  }

updateProduits(id:Number){
  this.router.navigate(['update-Produits',id]);
}
deleteproduits(id:Number){
  this.produitsService.deleteProduit(id)
  .subscribe(data=>{
    console.log(data);
    this.getProduits();
});}

}
