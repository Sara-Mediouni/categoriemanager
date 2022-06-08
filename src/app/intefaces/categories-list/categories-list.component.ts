import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Categories } from '../categorie';
import { CategoriesService } from '../categories.service';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';
import { Produits } from '../produits';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  
  data:[][];
  p:Produits[]
  categories: Categories[];
  constructor(private categoriesService:CategoriesService,
    private router:Router) { }
    @ViewChild('pdfTable') pdfTable: ElementRef;
  ngOnInit(): void {
    this.getCategories();
  }
  private getCategories() {
    this.categoriesService.getCategoriesList().subscribe(data=>{
      this.categories=data;
      
    });
  }
  
CategoriesDetails(id:Number){
  this.router.navigate(['Categories-details',id]);
}
updateCategories(id:Number){
  this.router.navigate(['update-Categories',id]);
}
deleteCategories(id:Number){
  this.categoriesService.deleteCategorie(id)
  .subscribe(data=>{
    console.log(data);
    this.getCategories();
});}
downloadAsPDF() {
  const doc = new jsPDF();
 
  const pdfTable = this.pdfTable.nativeElement;
 
  var html = htmlToPdfmake(pdfTable.innerHTML);
   
  const documentDefinition = { content: html };
  pdfMake.createPdf(documentDefinition).open(); 
   
}
exportAsXLSX():void {
  this.categoriesService.exportAsExcelFile(this.categories, 'categories');
}
}


