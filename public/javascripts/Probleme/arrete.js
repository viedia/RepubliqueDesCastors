"use strict";
class arrete
{
    constructor(depart, arrivee,nom, max)
    {
        this.nom =nom;
        this.flotMax = max;
        this.flot = 0;
        this.sommets = [depart, arrivee];
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
}