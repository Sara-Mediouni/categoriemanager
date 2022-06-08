import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produits } from '../intefaces/produits';
import { ProduitsService } from '../intefaces/produits.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits: Produits[];
  constructor(private produitsService:ProduitsService,
    private router:Router) { }

  ngOnInit(): void {
    this.getProduits();
  }
  private getProduits() {
    this.produitsService.getProduitsList().subscribe(data=>{
      this.produits=data;
      
    });
  }
  updateProduits(id:Number){
    this.router.navigate(['update-Produits',id]);
  }
  deleteProduits(id:Number){
    this.produitsService.deleteProduit(id)
    .subscribe(data=>{
      console.log(data);
      this.getProduits();
  });}
}
