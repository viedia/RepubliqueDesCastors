"use strict";
class Sommet
{
    constructor(n,x,y)
    {
        this.nom = n;
        this.x = x;
        this.y = y;
        this.voisins = [];
    }

    getNom()
    {
        return this.nom;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    ajouterVoisin(nouveauVoisin) {
        if (this.voisins.indexOf(nouveauVoisin) == -1) {
            this.voisins.push(nouveauVoisin);
        }
    }
}