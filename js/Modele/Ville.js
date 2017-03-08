"use strict";
class Ville
{
    constructor()
    {
        var bat = new Batiment("Mairie");
        this.batiments = [bat];
    }

    ajouterBatiment(nom)
    {
        this.batiments.push(new Batiment(nom));
    }

    getBatiments()
    {
        return this.batiments;
    }
}