import { Produits } from "./produits";


export class Categories{
    id: Number;
    nomCat: String;
    qtCat: Number;
    date_creation1: Date;
    date_mmodif: Date;
    produits:Produits[];
}