"use strict";
class VueProbleme
{
    constructor(c, probleme)
    {
        this.controleur = c;
        this.pb = new ProblemeTransport();
        //this.attacherEvenements();
        this.cy = cytoscape({
            container: $('#cy'),
            elements: [],

            layout: {
                name: 'preset',
                fit: true,
                zoom: 2
            },

            // so we can see the ids etc
            style: [
                {
                    selector: 'node',
                    style: {
                        'content': 'data(id)'
                    }
                },

                {
                    selector: ':parent',
                    style: {
                        'background-opacity': 0.6
                    }
                },

                {
                    selector: 'edge',
                    style: {
                        'label': 'data(flux)'
                    }
                }
            ]
        });
        
        this.loader = new ChargeurJSON(this.pb,this.controleur);

        
    }

    afficherGraphe(){
        var Arr,Som;
        var temp = this.pb.getRepresentation();
        var tabArr = temp.getArretes();
        var tabNoeud = temp.getNoeuds();
        for (var i = 0; i < tabNoeud.length; i++) {
            Som = tabNoeud[i];
            
            this.cy.add([
                { data: { id: Som.getNom() }, position: { x: Som.getX(), y: Som.getY() } }
            ])
        }

        for(var i =0; i<tabArr.length;i++){
            Arr = tabArr[i];
            this.cy.add([
                { data: { id: Arr.getId(), nom: Arr.getNom(), source: Arr.getDepart(), target: Arr.getArrivee(), flotMax: Arr.getFlotMax(), flot: Arr.getFlot(), flux: Arr.getFlot() + "/" + Arr.getFlotMax() } }
                ])     
        }
    }
}