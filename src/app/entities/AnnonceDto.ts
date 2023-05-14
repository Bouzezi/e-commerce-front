export class AnnonceDto{
    idAnnonce!:number;
    idProd!:number
    image!:string;
    images!:[];
    labelle!:string;
    prix!:string;
    description!:string;
    idSousCateg!:any;
    nom_sous_category!:string;
    idC!:string;
    dateCreation!:string;
    nomAnnonce!:string;

    constructor(){

    }
}