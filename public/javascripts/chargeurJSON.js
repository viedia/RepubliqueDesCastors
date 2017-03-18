"use strict";

class ChargeurJSON {

    constructor(p,c) {
        this.json = null;
        this.probleme = p;
        this.controleur = c;
        this.initialiserProbleme();

    }
    
    initialiserProbleme() {
        var that = this;
        $.getJSON("JSON/TEST.json", function (json) {
            var arretes = json.arretes;
            var noeuds = json.noeuds;

            for (var i = 0; i < arretes.length; i++) {
                var id = arretes[i].id;
                var nom = arretes[i].nom;
                var source = arretes[i].source;
                var cible = arretes[i].cible;
                var flotMax = arretes[i].flotMax;
                var flot = arretes[i].flot;
                var arr = new Arrete(id, nom, source, cible, flotMax, flot);
                that.probleme.ajouterArr(arr);
            }

            for (var j = 0; j < noeuds.length; j++) {
                var id = noeuds[j].id;
                var x = noeuds[j].position.x;
                var y = noeuds[j].position.y;
                var voisins = noeuds[j].voisins;
                var N = new Sommet(id, x, y);

                for (var k = 0; k < voisins.length; k++) {
                    N.ajouterVoisin(voisins[k]);
                }
                
                that.probleme.ajouterNoeud(N);
            }
           
            that.controleur.actualiser();

        });
        
    }
    

}