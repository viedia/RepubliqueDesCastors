"use strict";
class Batiment
{
    constructor(nomBatiment, voisinage = Array(0))
    {
        this.nom = nomBatiment;
        this.voisins = voisinage;
        this.niveau = 1;
        this.listeProbleme = this.initListeProbleme(); 
    }

    ajouterVoisin(nouveauVoisin)
    {
        if(this.voisins.indexOf(nouveauVoisin)== -1)
        {   
            this.voisins.push(nouveauVoisin);
         }
    }

    ameliorer()
    {
        this.niveau +=1;
    }

    initListeProbleme()
    {
        // mettre ici le chemin du fichier à charger et les traitement
        return null ; // retourner un tableau avec les graphes
    }
    getNom()
    {
        return this.nom;
    }

    getVoisins()
    {
        return this.voisins;
    }
}