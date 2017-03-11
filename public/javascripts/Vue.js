"use strict";
class Vue {

    constructor(c) {
        this.controleur = c;
        this.attacherEvenements();
        this.cy = cytoscape({
            container: document.getElementById('cy'),
           style: [ // the stylesheet for the graph
                {
                    selector: 'node',
                    style: {
                        'background-color': '#666',
                        'label': 'data(name)'
                    }
                }]
        });
        this.afficherVille();
    }

    attacherEvenements() {
        var that = this;
        $('.onglet.finance').click(function () {
            that.controleur.selectionnerOnglet($(this));
            that.ouvrirFenetreFinance();
        });
        $('#btn-passer').click(function(){
            that.controleur.jourSuivant()
        });
    }

    selectionnerOnglet(o) {
        $('.onglet.actif').removeClass('actif');
        o.addClass('actif');
        $('.panelOnglet.actif').removeClass('actif');
        var position = $('.onglet').index(o);
        $('.panelOnglet').eq(position).addClass('actif')
    }

    ouvrirFenetreFinance()
    {
        window.open("indexFinance.html","",'width=500, height=500, top=101, left=101');
    }

/**
 * fonction refresh
 */
    afficherVille(){
        var batS,bat;
        var tabBat = this.controleur.getVille().getBatiments();
        for(var i =0; i<tabBat.length;i++){
            batS = tabBat[i];
            if(batS.getVoisins().length == 0){
                this.cy.add([{data: {id: batS.getNom(), name:batS.getNom()}}]);
            }else{
                for(var j =0; j<batS.getVoisins().length;j++){
                    this.cy.add([{ 
                        data: { id: batS.getNom(), name:batS.getNom() }  },
                        { data: { id: batS.getVoisins()[j].getNom(), name :batS.getVoisins()[j].getNom() } },
                        { data: { id: "-", source: batS.getNom(), target: batS.getVoisins()[j].getNom() } },
                    ])
                }
            }
        }
   }
}
