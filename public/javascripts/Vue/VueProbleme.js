"use strict";
class VueProbleme
{
    constructor(c, probleme)
    {
        this.controleur = c;
        this.pb = probleme;
        //this.attacherEvenements();
        this.cy = cytoscape({
            container: $('#cy'),
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
        this.afficherGraphe();
    }

    afficherGraphe(){
        var batS,bat;
        var temp = this.pb.getRepresentation();
        var tabBat = temp.getArretes();
        for(var i =0; i<tabBat.length;i++){
            batS = tabBat[i];
            this.cy.add([{
                data: { id: batS.getSommets()[0].getNom() }
                },
                { data: { id: batS.getSommets()[1].getNom() } },
                { data: { id: batS.getNom() , source: batS.getSommets()[0].getNom(), target:  batS.getSommets()[1].getNom(), flux:batS.getFlot()+"/"+batS.getFlotMax() } },
                ])     
            
        }
    }
}