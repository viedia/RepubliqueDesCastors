"use strict";
class Vue {

    constructor(c) {
        this.controleur = c;
        this.attacherEvenements();
        this.cy = cytoscape({
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
                          flotMax: 40, //flot max de l'arrête
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
                          flotMax: 5,
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
                zoom: 2,
                position:225
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
             
        this.afficherVille();
        this.gestionFlux();
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
        window.open("indexFinance","",'width=500, height=500, top=101, left=101');
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
                        { data: { id:j,  source: batS.getNom(), target: batS.getVoisins()[j].getNom()} },
                    ])
                }
            }
        }
    }

    gestionFlux() {
        for (var i = 1; i <= this.cy.collection("edge").length; i++)// parcours des arrêtes
        {
            var idE = '[id="e' + i + '"]'; //id de l'arrête traitée
            var Max = this.cy.edges(idE).data('flotMax');// on recupère le flotMax
            var flot = this.cy.edges(idE).data('flot');// on recupère le flot
            var flux = flot + '/' + Max;

            this.cy.edges(idE).data('flux', flux); // set flux à la bonne valeurs


        }
    }

}
