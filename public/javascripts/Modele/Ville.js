"use strict";
class Ville
{
    constructor()
    {
        var bat = new Batiment("Mairie");
        this.batiments = [bat];
        this.ajouterBatiment(new Batiment("Reserve"), bat);
        this.population = new Population();
        this.stockNourriture = new Nourriture();
        this.argent = new Monnaie();

    }

    ajouterBatiment(batiment, voisin = null)
    {
        var nouveauBat= batiment;
        this.batiments.push(nouveauBat);
        if(voisin != null)
        {
            var bat1 =this.batiments[this.batiments.indexOf(voisin)];
            var bat2 = this.batiments[this.batiments.indexOf(nouveauBat)];
            bat1.ajouterVoisin(nouveauBat);
            bat2.ajouterVoisin( voisin);
        }
    }

/**
 * faire les mise à jour de l'argent, la nourriture et de la population
 **/
    jourSuivant()
    {
        this.stockNourriture.jourSuivant(this.population.getQuantite());  
        this.argent.jourSuivant(this.population.getQuantite());
    }
    getBatiments()
    {
        return this.batiments;
    }

    getQteNourriture()
    {
        return this.stockNourriture.getQuantite() ;
    }
    getQteArgent()
    {
        return this.argent.getQuantite() ;
    }
    getQteHabitant()
    {
        return this.population.getQuantite() ;
    }
    getProductionNourriture()
    {
        return this.stockNourriture.getProduction();
    }
    getGainArgent()
    {
        return this.argent.getGain();
    }
}