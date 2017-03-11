"use strict";
class Vue {

    constructor(c) {
        this.controleur = c;
        this.attacherEvenements();
        this.cy = cytoscape({
            container: document.getElementById('cy'),
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
                          x: 100,
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
                      renderedPosition: { x: 150, y: 50 } // can alternatively specify position in rendered on-screen pixels
                  },
                  { // node n3
                      data: { id: 'B' },
                      position: { x: 150, y: 100 }
                  },
                  { // node n3
                      data: { id: 'C' },
                      position: { x: 150, y: 150 }
                  },
                  { // node n2
                      data: { id: 'D' },
                      renderedPosition: { x: 300, y: 50 } // can alternatively specify position in rendered on-screen pixels
                  },
                  { // node n3
                      data: { id: 'E' },
                      position: { x: 300, y: 100 }
                  },
                  { // node n3
                      data: { id: 'F' },
                      position: { x: 300, y: 150 }
                  },
                  { // node n3
                      data: { id: 'Puit' },
                      position: { x: 350, y: 100 }
                  },

                  { // edge e1
                      data: {
                          id: 'e1',
                          // inferred as an edge because `source` and `target` are specified:
                          source: 'Source', // the source node id (edge comes from this node)
                          target: 'A'  // the target node id (edge goes to this node)
                      }
                  },
                  {
                      data: {
                          id: 'e2',
                          source: 'Source',
                          target: 'B'
                      }
                  },
                  {
                      data: {
                          id: 'e3',
                          source: 'Source',
                          target: 'C'
                      }
                  },
                  {
                      data: {
                          id: 'e4',
                          source: 'A',
                          target: 'E'
                      }
                  },
                  {
                      data: {
                          id: 'e5',
                          source: 'A',
                          target: 'D'
                      }
                  },
                  {
                      data: {
                          id: 'e6',
                          source: 'B',
                          target: 'F'
                      }
                  },
                  {
                      data: {
                          id: 'e7',
                          source: 'B',
                          target: 'D'
                      }
                  },
                  {
                      data: {
                          id: 'e8',
                          source: 'B',
                          target: 'E'
                      }
                  },
                  {
                      data: {
                          id: 'e9',
                          source: 'C',
                          target: 'E'
                      }
                  }, {
                      data: {
                          id: 'e10',
                          source: 'C',
                          target: 'F'
                      }
                  }, {
                      data: {
                          id: 'e11',
                          source: 'D',
                          target: 'Puit'
                      }
                  },
                  {
                      data: {
                          id: 'e12',
                          source: 'E',
                          target: 'Puit'
                      }
                  }, {
                      data: {
                          id: 'e13',
                          source: 'F',
                          target: 'Puit'
                      }
                  }
            ],

            layout: {
                name: 'preset'
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
                        'label': 'data(id)'
                    }
                }
            ]
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
}
