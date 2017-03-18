"use strict";
class ProblemeTransport
{
    constructor()
    {
        var s1 = new Sommet("S");
        var s2 = new Sommet("A");
        var s3 = new Sommet("B");
        var s4 = new Sommet("C");
        var s5 = new Sommet("D");
        var s6 = new Sommet("E");
        var s7 = new Sommet("F");
        var s8 = new Sommet("P");
        var e1 = new arrete(s1 , s2,"e1",15);
        var e2 = new arrete(s1, s3,"e2",15);
        var e3 = new arrete(s1, s4,"e3",15);
        var e4 = new arrete(s2, s5,"e4",15);
        var e5 = new arrete(s2, s6,"e5",15);
        var e6 = new arrete(s3, s5,"e6",15);
        var e7 = new arrete(s3, s6,"e7",15);
        var e8 = new arrete(s3, s7,"e8",15);
        var e9 = new arrete(s4, s6,"e9",15);
        var e10 = new arrete(s4, s7,"e10",15);
        var e11 = new arrete(s5 , s8,"e11",15);
        var e12 = new arrete(s6, s8,"e12",15);
        var e13 = new arrete(s7, s8,"e13",15);
        var tab = [e1,e2,e3,e4,e5,e6,e7,e8,e9,e10,e11, e12, e13];
        this.representation = new Graphe(tab);
        
        /*this.cy = cytoscape({
            container: $('#cyT'),
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
        });*/
        
       // this.initFlux();
      //  this.initFluxConfig1();
    }

    getRepresentation()
    {
        return this.representation;
    }

    initFlux() {//Initialisation des flux

       /* for (var i = 1; i <= this.cy.edges().length; i++)// parcours des arr�tes
        {
            var value = 0;
            this.setFlux(i, value);
        }*/
    }

    initFluxConfig1() {
        var conf = [];
        var that = this;
        $.getJSON("JSON/Configuration1.json", function (json) {
            for (var i = 1; i <= that.cy.edges().length; i++)// parcours des arr�tes
            {
                that.setFlux(i, json[i - 1]); // le tableau JSON commence � 0 donc json[i-1]
            }
        });
        
    }

    /**
    * Modifie le flot de l'arr�te avec l'id pass� en param
    *
    * @param idEdge entier positif
    * @param flot entier positif
    */
    setFlux(idEdge, flot) { 
      
        if ((idEdge <= this.cy.edges().length) && (idEdge > 0)) { // condition pour que l'id de l'arr�te soit correct
            var idE = '[id="e' + idEdge + '"]'; // id de l'arr�te
            var Max = this.getFlotMax(idEdge);// on recup�re le flotMax

            if ((flot => 0) && (flot <= Max)) { //flot positif et inf�rieur � flotMax
                var flux = flot + '/' + Max;
                this.cy.edges(idE).data('flot', flot);
                this.cy.edges(idE).data('flux', flux); // set flux � la valeur voulue

            } else {
                alert("flux incorrect pour l'arrete n "+idEdge);
            }
           
        } else {
            console.log("Aucune arrete n " + idEdge+" dans le graphe");
        }
        
    }

    getFlot(idEdge) {
        if ((idEdge <= this.cy.edges().length) && (idEdge > 0)) { 
            var idE = '[id="e' + idEdge + '"]'; // id de l'arr�te 
            var flot = this.cy.edges(idE).data('flot');// on recup�re le flotMax
            return flot;
        }else
            console.log("Aucune arrete n " + idEdge + " dans le graphe");
    }

    getFlotMax(idEdge) {
        if ((idEdge <= this.cy.edges().length) && (idEdge > 0)) {
            var idE = '[id="e' + idEdge + '"]'; // id de l'arr�te 
            var Max = this.cy.edges(idE).data('flotMax');// on recup�re le flotMax
            return Max;
        }else
            console.log("Aucune arrete n " + idEdge + " dans le graphe");
    }
}