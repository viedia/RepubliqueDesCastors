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
             
        this.loader = new ChargeurJSONGraphe(this.controleur);
    }

    attacherEvenements() {
        var that = this;
        $('.onglet').click(function () {
            that.controleur.selectionnerOnglet($(this));
        });
        $('.finance').click(function () {
            that.ouvrirFenetreSecondaire("Finance", "La quantit� d'argent disponible est :");
        });
        $('.riviere').click(function () {
            that.ouvrirFenetreSecondaire("Nourriture", "La quantit� de nourriture est de :");
        });
        $('.mairie').click(function () {
            that.ouvrirFenetreSecondaire("Mairie", "");
        });
        $('#btn-passer').click(function(){
            that.controleur.jourSuivant();
        });
        $('#btn-passer').click(function () {
            console.log(that.cy.nodes);
        });

    }

    selectionnerOnglet(o) {
        $('.onglet.actif').removeClass('actif');
        o.addClass('actif');
        $('.panelOnglet.actif').removeClass('actif');
        var position = $('.onglet').index(o);
        $('.panelOnglet').eq(position).addClass('actif')
    }
    ouvrirFenetreSecondaire(type, texte)
    {
        if (type == "Finance")
        {
            document.getElementById("qte_Argent").innerText = texte + this.controleur.getVille().getQteArgent();
            document.getElementById("prod_Argent").innerText = texte + this.controleur.getVille().getGainArgent() + "/jour";
        }else if(type == "Nourriture")
        {
            document.getElementById("qte_Nourriture").innerText = texte + this.controleur.getVille().getQteNourriture();
            document.getElementById("prod_Nourriture").innerText = texte + this.controleur.getVille().getProductionNourriture();
        }
        else if (type == "Mairie")
        {
            document.getElementById("informations").innerText = "nombre d'habitants :" + this.controleur.getVille().getQteHabitant() + "\rr�serve de nouriture" + this.controleur.getVille().getQteNourriture() + "\rargent disponiqble : " + this.controleur.getVille().getQteArgent();
        }
    }

/**
 * fonction refresh
 */

    afficherGraphe() {
        var batS, bat;
        var tabBat = this.controleur.getVille().getBatiments();
        for (var i = 0; i < tabBat.length; i++) {
            batS = tabBat[i];
            this.cy.add([{ data: { id: batS.getNom(), name: batS.getNom() }, position: { x: batS.getX(), y: batS.getY() } }]);// ajout du noeuds
        }
        for (var i = 0; i < tabBat.length; i++) {
            batS = tabBat[i];
            for (var j = 0; j < batS.getVoisins().length; j++) {
                var voisin = batS.getVoisins()[j];
                
                this.cy.add([
                { data: { id: batS.getNom().substring(0, 1) + voisin.substring(0,1), source: batS.getNom(), target: voisin } }]);
            }
        }
        
            
           
                
            
        
    }
}
