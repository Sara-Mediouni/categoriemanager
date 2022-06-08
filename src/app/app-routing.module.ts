import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesDetailsComponent } from './intefaces/categories-details/categories-details.component';
import { CategoriesListComponent } from './intefaces/categories-list/categories-list.component';
import { CreateCategoriesComponent } from './intefaces/create-categories/create-categories.component';
import { UpdateCategoriesComponent } from './intefaces/update-categories/update-categories.component';
import { ProduitslistComponent } from './intefaces/produitslist/produitslist.component';
import { UpdateProduitsComponent } from './update-produits/update-produits.component';
import { CreateProduitsComponent } from './intefaces/create-produits/create-produits.component';
import { ProduitsComponent } from './produits/produits.component';

const routes: Routes =  [
  {path: 'categories', component: CategoriesListComponent},
  {path: 'create-categories', component: CreateCategoriesComponent},
  {path: '', redirectTo: 'categories', pathMatch: 'full'},
  {path: 'update-categories/:id', component: UpdateCategoriesComponent},
  {path: 'categories-details/:id', component: CategoriesDetailsComponent},
  {path: 'produits/:id', component: ProduitslistComponent},
  {path: 'produits', component: ProduitslistComponent},
  {path: 'create-produits', component: CreateProduitsComponent},
  {path: 'update-produits/:id', component:UpdateProduitsComponent},
  {path: 'produitslist', component:ProduitsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
