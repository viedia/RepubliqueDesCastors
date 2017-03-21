"use strict";

class ChargeurJSONGraphe {

    constructor(c) {
        this.controleur = c;
        this.initialiser();
    }

    initialiser() {
        var that = this;
        $.getJSON("JSON/Graphe.json", function (json) {
            var noeuds = json.noeuds;
            var nourriture = json.nourriture;
            var population = json.population.nombreIndividu;
            that.controleur.getVille().setNourriture(nourriture.quantite, nourriture.production);
            that.controleur.getVille().setPopulation(population);
            console.log("production : "+ that.controleur.getVille().getProductionNourriture());
            for (var j = 0; j < noeuds.length; j++) {
                var id = noeuds[j].id;
                var x = noeuds[j].position.x;
                var y = noeuds[j].position.y;
                var voisins = noeuds[j].voisins;
                var B = new Batiment(id, x, y);

                for (var k = 0; k < voisins.length; k++) {
                    B.ajouterVoisin(voisins[k]);
                }

                that.controleur.getVille().ajouterBatiment(B);
            }
            that.controleur.actualiser();

        });

    }


}