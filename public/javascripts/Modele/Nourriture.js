"use strict";
class Nourriture
{
    constructor()
    {
        this.quantite = 0;
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
    SetAll(qte, prod) {
        this.quantite = qte;
        this.production = prod;
    }
}