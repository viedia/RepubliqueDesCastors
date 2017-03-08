"use strict";
class Batiment
{
    constructor(nomBatiment, voisinage = null)
    {
        this.nom = nomBatiment;
        this.voisins = voisinage;
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