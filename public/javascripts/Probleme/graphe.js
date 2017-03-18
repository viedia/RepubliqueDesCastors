"use strict";
class Graphe
{
    constructor(tabArretes, tabSommet)
    {
        this.arretes = tabArretes;
        this.noeuds = tabSommet;
    }

    getArretes()
    {
        return this.arretes;
    }

    getNoeuds() {
        return this.noeuds;
    }


    ajouterArr(arr) {
        this.arretes.push(arr);
    }

    ajouterNoeud(n) {
        this.noeuds.push(n);
    }
}