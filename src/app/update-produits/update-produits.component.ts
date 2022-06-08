import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produits } from '../intefaces/produits';
import { ProduitsService } from '../intefaces/produits.service';

@Component({
  selector: 'app-update-produits',
  templateUrl: './update-produits.component.html',
  styleUrls: ['./update-produits.component.css']
})
export class UpdateProduitsComponent implements OnInit {
  id: Number;
  produits:Produits=new Produits();
  constructor(private produitsService:ProduitsService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
     this.id=this.route.snapshot.params['id'];
    this.produitsService.getProduitsById(this.id).subscribe(data=>{
      this.produits=data;

    },
    error=>console.log(error));
  }
  onSubmit(){
    this.produitsService.updateProduits(this.id,this.produits).subscribe(data=>
      {
        this.goToProduitsList();
      },
      error=>console.log(error));
  }
    goToProduitsList()
     {
      this.router.navigate(['/produitslist']);
    }
}
