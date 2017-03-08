"use strict";
class controleur {
     constructor() {
        this.vue = null;
        //this.carte = new Carte();
        this.ville = new Ville();
        var a = [new Batiment("voisin 1 ")];
        this.ville.ajouterBatiment(new Batiment("test", a));

        this.initialiser();
    }

    initialiser() {
        this.vue = new Vue(this);
    }

    selectionnerOnglet(o) {
        this.vue.selectionnerOnglet(o);
    }

    getVille()
    {
        return this.ville;
    }
}