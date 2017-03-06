"use strict";
class FenetrePrincipale
{

constructor(){
    var cy = cytoscape({
    container: document.getElementById('cy'),
            elements: [
            { data: { id: 'a', name:'Mairie' } },
            { data: { id: 'b', name: 'Batiment transport' } },
            {
                data: {
                id: 'ab',
                source: 'a',
                target: 'b'
            }
        }],
        style: [ // the stylesheet for the graph
        {
        selector: 'node',
        style: {
            'background-color': '#666',
            'label': 'data(name)'
        }
        }]
    });
}

}
