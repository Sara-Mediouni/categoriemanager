import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Produits } from './produits';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
private baseurl='http://localhost:8080/produits';


  constructor(private http:HttpClient) {
    
   }


  

  
  

  getProduitsById(id:Number):Observable<any>{
       return this.http.get(`${this.baseurl}/find/${id}`)
  }
  deleteProduit(id:Number):Observable<any>{
        return this.http.delete(`${this.baseurl}/delete/${id}`)
      }
  getProduitsList(): Observable<Produits[]>{
        return this.http.get<Produits[]>(`${this.baseurl}/all`);
      }
  updateProduits(id:Number,c:Produits):Observable<any>{
        return this.http.put(`${this.baseurl}/update/${id}`,c)
          }  
   createProduits(c: Produits): Observable<Object>{
         return this.http.post(`${this.baseurl}/add`, c);
          }  
    findbycat(id:Number): Observable<Produits[]>{
            return this.http.get<Produits[]>(`${this.baseurl}/findbycat/${id}`);
             }       
            
}
