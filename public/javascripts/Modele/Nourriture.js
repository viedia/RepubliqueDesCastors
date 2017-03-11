"use strict";
class Nourriture
{
    constructor()
    {
        this.quantite = 1000;
    }

    jourSuivant(nbPop)
    {
        this.quantite -=nbPop;
        console.log(this.quantite);
    }
}