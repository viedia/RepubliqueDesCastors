"use strict";
class controleur {
     constructor() {
        this.vue = null;
        this.jour = 1;
        this.ville = new Ville();
        /*var a = new Batiment("voisin 1 ");
        var b = new Batiment("voisin 2 ");
        var c = new Batiment("test");
        this.ville.ajouterBatiment(a);
        this.ville.ajouterBatiment(b, a);
        this.ville.ajouterBatiment(c, a);*/
        this.initialiser();
    }

    initialiser() {
        this.vue = new Vue(this);
       // this.vue = new VueProbleme(this, new ProblemeTransport());
    }

    selectionnerOnglet(o) {
        this.vue.selectionnerOnglet(o);
    }

    jourSuivant()
    {
        this.jour+=1;
        this.ville.jourSuivant();
    }

    getVille()
    {
        return this.ville;
    }

    getJour()
    {
        return this.jour;
    }

}