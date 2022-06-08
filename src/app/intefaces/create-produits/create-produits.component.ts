import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produits } from '../produits';
import { ProduitsService } from '../produits.service';

@Component({
  selector: 'app-create-produits',
  templateUrl: './create-produits.component.html',
  styleUrls: ['./create-produits.component.css']
})
export class CreateProduitsComponent implements OnInit {
  produits:Produits=new Produits();
  constructor(private produitsService:ProduitsService,
    private router:Router) { }

  ngOnInit(): void {
  }
  saveProduits(){
    this.produitsService.createProduits(this.produits).subscribe(data=>{
      console.log(data);
      this.goToProduitsList();
    },error=>console.log(error));
  }
  goToProduitsList(){
    this.router.navigate(['/produitslist'])
  }
  onSubmit(){
    console.log(this.produits);
    this.saveProduits();
  }
}
