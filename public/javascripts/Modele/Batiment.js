"use strict";
class Batiment
{
    constructor(nomBatiment,x,y)
    {
        this.nom = nomBatiment;
        this.voisins = new Array();
        this.x = x;
        this.y = y;
    }

    ajouterVoisin(nouveauVoisin)
    {
        if(this.voisins.indexOf(nouveauVoisin)== -1)
        {   
            this.voisins.push(nouveauVoisin);
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
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
}