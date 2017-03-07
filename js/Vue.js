"use strict";
class Vue {

    constructor(c) {
        this.controleur = c;
        this.attacherEvenements();
    }

    attacherEvenements() {
        var that = this;
        $('.onglet').click(function () {
            that.controleur.selectionnerOnglet($(this));
        });
    }

    selectionnerOnglet(o) {
        $('.onglet.actif').removeClass('actif');
        o.addClass('actif');
        $('.panelOnglet.actif').removeClass('actif');
        var position = $('.onglet').index(o);
        $('.panelOnglet').eq(position).addClass('actif')
    }


}
