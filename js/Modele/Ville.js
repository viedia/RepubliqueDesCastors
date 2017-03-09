"use strict";
class Ville
{
    constructor()
    {
        var v = [new Batiment("copain")];
        var bat = new Batiment("Mairie", v);
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