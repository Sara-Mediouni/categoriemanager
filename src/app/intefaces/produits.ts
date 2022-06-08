import { Categories } from "./categorie";

export class Produits{
    id: Number;
    nom: String;
    qt: Number;
    date_creation: Date;
    date_modif: Date;
    disponible:Boolean;
    id_Categories:Categories=new Categories();
}