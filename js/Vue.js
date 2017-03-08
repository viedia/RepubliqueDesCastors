"use strict";
class Vue {

    constructor(c) {
        this.controleur = c;
        this.attacherEvenements();
        this.cy = cytoscape({
            container: document.getElementById('cy')
        });
        this.afficherVille();
    }

    attacherEvenements() {
        var that = this;
        $('.onglet').click(function () {
            that.controleur.selectionnerOnglet($(this));
        });
    }

    selectionnerOnglet(o) {
        $('.onglet.actif').removeClass('actif');
        o.addClass('actif');
        $('.panelOnglet.actif').removeClass('actif');
        var position = $('.onglet').index(o);
        $('.panelOnglet').eq(position).addClass('actif')
    }

    afficherVille(){
        for(var b in this.controleur.getVille().getBatiments() )
        {
            for(var v in b.getVoisins())
            {
                this.cy.add([{ 
                    group: "nodes", data: { id: b.getNom() }  },
                    { group: "nodes", data: { id: v.getNom() } },
                    { group: "edges", data: { id: "-", source: b.getNom(), target: v.getNom() } }
                ])
            }

        }
   }
}
