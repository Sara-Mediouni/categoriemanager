import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCategoriesComponent } from './intefaces/create-categories/create-categories.component';
import { CategoriesDetailsComponent } from './intefaces/categories-details/categories-details.component';
import { CategoriesListComponent } from './intefaces/categories-list/categories-list.component';
import { UpdateCategoriesComponent } from './intefaces/update-categories/update-categories.component';
import { FormsModule } from '@angular/forms'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { ProduitslistComponent } from './intefaces/produitslist/produitslist.component';
import { UpdateProduitsComponent } from './update-produits/update-produits.component';
import { ProduitsComponent } from './produits/produits.component';
import { CreateProduitsComponent } from './intefaces/create-produits/create-produits.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCategoriesComponent,
    CategoriesDetailsComponent,
    CategoriesListComponent,
    UpdateCategoriesComponent,
    ProduitslistComponent,
    UpdateProduitsComponent,
    ProduitsComponent,
    CreateProduitsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
