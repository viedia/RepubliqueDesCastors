"use strict";
class Vue {

    constructor(c) {
        this.controleur = c;
        this.attacherEvenements();
        this.cy = cytoscape({
            container: $('#cy'),
            layout: {
                name: 'preset',
                fit: true,
                zoom: 2
            },
            style: [
                {
                    selector: 'node',
                    style: {
                        'background-color': '#666',
                        'label': 'data(id)'
                    }
                }
            ]
        });
             
        this.afficherVille();
    }

    attacherEvenements() {
        var that = this;
        $('.onglet').click(function () {
            that.controleur.selectionnerOnglet($(this));
        });
        $('.finance').click(function () {
            that.ouvrirFenetreSecondaire("Finance", "" );
        });
        $('.riviere').click(function () {
            that.ouvrirFenetreSecondaire("Nourriture", "La quantité de nourriture est de :");
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

    ouvrirFenetreNourriture()
    {
        document.getElementById("qte_Nourriture").innerText = this.controleur.getVille().getQteNourriture();
    }
    ouvrirFenetreSecondaire(type, texte)
    {
        if (type == "Fiance")
        {
           
        }else if(type == "Nourriture")
        {
            document.getElementById("qte_Nourriture").innerText = texte + this.controleur.getVille().getQteNourriture() ;
        }
        else (type == "Transport")
        {

        }
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
                this.cy.add([{ data: { id: batS.getNom(), name: batS.getNom() }, position: { x: 225, y: 50 } }]);
            }else{
                for(var j =0; j<batS.getVoisins().length;j++){
                    this.cy.add([{ 
                        data: { id: batS.getNom(), name:batS.getNom() }},
                        { data: { id: batS.getVoisins()[j].getNom(), name :batS.getVoisins()[j].getNom() } },
                        { data: { id:j,  source: batS.getNom(), target: batS.getVoisins()[j].getNom()} },
                    ])
                }
            }
        }
    }
}
