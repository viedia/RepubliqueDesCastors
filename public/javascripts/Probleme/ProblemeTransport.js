"use strict";
class ProblemeTransport
{
    constructor()
    {
        var e1 = new arrete(new Sommet("A"), new Sommet("B"),"e1",15);
        var tab = [e1];
        this.representation = new Graphe(tab);
        
        /*this.cy = cytoscape({
            container: $('#cy'),
            elements: [
                  { // node n1
                      group: 'nodes', // 'nodes' for a node, 'edges' for an edge
                      data: { // element data (put json serialisable dev data here)
                          id: 'Source', // mandatory (string or number) id for each element, assigned automatically on undefined
                      },
                      // scratchpad data (usually temp or nonserialisable data)
                      scratch: {
                          foo: 'bar'
                      },
                      position: { // the model position of the node (optional on init, mandatory after)
                          x: 30,
                          y: 100
                      },
                      selected: false, // whether the element is selected (default false)
                      selectable: true, // whether the selection state is mutable (default true)
                      locked: false, // when locked a node's position is immutable (default false)
                      grabbable: true, // whether the node can be grabbed and moved by the user
                      classes: 'foo bar' // a space separated list of class names that the element has
                  },
                  { // node n2
                      data: { id: 'A' },
                      renderedPosition: { x: 150, y: 20 } // can alternatively specify position in rendered on-screen pixels
                  },
                  { // node n3
                      data: { id: 'B' },
                      position: { x: 105, y: 100 }
                  },
                  { // node n3
                      data: { id: 'C' },
                      position: { x: 150, y: 180 }
                  },
                  { // node n2
                      data: { id: 'D' },
                      renderedPosition: { x: 300, y: 20 } // can alternatively specify position in rendered on-screen pixels
                  },
                  { // node n3
                      data: { id: 'E' },
                      position: { x: 345, y: 100 }
                  },
                  { // node n3
                      data: { id: 'F' },
                      position: { x: 300, y: 180 }
                  },
                  { // node n3
                      data: { id: 'Puit' },
                      position: { x: 420, y: 100 }
                  },

                  { group: 'edges',
                      // edge e1
                      data: {
                          id: 'e1',
                          // inferred as an edge because `source` and `target` are specified:
                          source: 'Source', // the source node id (edge comes from this node)
                          target: 'A', // the target node id (edge goes to this node)
                          flotMax: 40, //flot max de l'arr�te
                          flot: 0, //flot actuelle
                          flux: '' // affichage du flux (flot/flotMax)
                      },
                      
                  },
                  {
                      data: {
                          id: 'e2',
                          source: 'Source',
                          target: 'B', 
                          flotMax: 20,
                          flot: 0,
                          flux: ''
                      }
                  },
                  {
                      data: {
                          id: 'e3',
                          source: 'Source',
                          target: 'C',
                          flotMax: 10,
                          flot: 0,
                          flux: ''
                      }
                  },
                  {
                      data: {
                          id: 'e4',
                          source: 'A',
                          target: 'E',
                          flotMax: 20,
                          flot: 0,
                          flux: ''
                      }
                  },
                  {
                      data: {
                          id: 'e5',
                          source: 'A',
                          target: 'D',
                          flotMax: 20,
                          flot: 0,
                          flux: ''
                      }
                  },
                  {
                      data: {
                          id: 'e6',
                          source: 'B',
                          target: 'F',
                          flotMax: 5,
                          flot:0,
                          flux: ''
                      }
                  },
                  {
                      data: {
                          id: 'e7',
                          source: 'B',
                          target: 'D',
                          flotMax: 10,
                          flot: 0,
                          flux: ''
                      }
                  },
                  {
                      data: {
                          id: 'e8',
                          source: 'B',
                          target: 'E',
                          flotMax: 5,
                          flot: 0,
                          flux: ''
                      }
                  },
                  {
                      data: {
                          id: 'e9',
                          source: 'C',
                          target: 'E',
                          flotMax: 10,
                          flot: 0,
                          flux: ''
                      }
                  }, {
                      data: {
                          id: 'e10',
                          source: 'C',
                          target: 'F',
                          flotMax: 25,
                          flot: 0,
                          flux: ''
                      }
                  }, {
                      data: {
                          id: 'e11',
                          source: 'D',
                          target: 'Puit',
                          flotMax: 25,
                          flot:0,
                          flux: ''
                      }
                  },
                  {
                      data: {
                          id: 'e12',
                          source: 'E',
                          target: 'Puit',
                          flotMax: 15,
                          flot: 0,
                          flux: ''
                      }
                  }, {
                      data: {
                          id: 'e13',
                          source: 'F',
                          target: 'Puit',
                          flotMax: 30,
                          flot: 0,
                          flux: ''
                      }
                  }
            ],

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