"use strict";
class Batiment
{
    constructor(nomBatiment, voisinage = Array(0))
    {
        this.nom = nomBatiment;
        this.voisins = voisinage;
    }

    ajouterVoisin(nouveauVoisin)
    {
        if(this.voisins.indexOf(nouveauVoisin)== -1)
        {   
            this.voisins.push(nouveauVoisin);
            nouveauVoisin.ajouterVoisin(this);
         }
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