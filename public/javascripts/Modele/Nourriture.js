"use strict";
class Nourriture
{
    constructor()
    {
        this.quantite = 1000;
        this.production = 0;
    }

    jourSuivant(nbPop)
    {
        this.quantite -=nbPop;
    }

    getQuantite()
    {
        return this.quantite;
    }

    getProduction() {
        return this.production;
    }
}