"use strict";
class Monnaie
{
    constructor()
    {
        this.quantite = 1000;
        this.gain = 0;
    }

    jourSuivant(nbPop) {
        this.quantite += nbPop;
    }

    getQuantite() {
        return this.quantite;
    }

    getGain() {
        return this.gain;
    }
}