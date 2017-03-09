"use strict";
class Ville
{
    constructor()
    {
        var bat = new Batiment("Mairie");
        this.population = new Population();
        this.stockNourriture = new Nourriture();
        this.batiments = [bat];
    }

    ajouterBatiment(nom)
    {
        this.batiments.push(new Batiment(nom));
    }

/**
 * faire les mise à jour de l'argent, la nourriture et de la population
 **/
    jourSuivant()
    {
        this.stockNourriture.jourSuivant(this.population.getQuantite());  
    }
    getBatiments()
    {
        return this.batiments;
    }
}