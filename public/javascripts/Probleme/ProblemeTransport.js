"use strict";
class ProblemeTransport
{
    constructor()
    {
        this.tabArr = [];
        this.tabNoeuds = [];
        this.representation = new Graphe(this.tabArr, this.tabNoeuds);
        
       
        
       
    }

    ajouterArr(arr) {
        this.representation.ajouterArr(arr);
    }

    ajouterNoeud(n) {
        this.representation.ajouterNoeud(n);
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