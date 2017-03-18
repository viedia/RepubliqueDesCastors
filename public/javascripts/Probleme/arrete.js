"use strict";
class Arrete
{
    constructor(id,nom, depart, arrivee, max, flot)
    {
        this.id = id;
        this.nom =nom;
        this.flotMax = max;
        this.flot = flot;
        this.depart = depart;
        this.arrivee = arrivee;
    }

    getId() {
        return this.id;
    }

    getNom()
    {
        return this.nom;
    }
    getFlot()
    {
        return this.flot;
    }
    getFlotMax()
    {
        return this.flotMax;   
    }
    getSommets()
    {
        return this.sommets;
    }
    setFlot(val)
    {
        this.flot = val;
    }
    getDepart() {
        return this.depart;
    }
    getArrivee() {
        return this.arrivee;
    }

}