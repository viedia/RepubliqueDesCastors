"use strict";
class controleur {
    constructor() {
        this.vue = null;
        this.carte = new Carte();
    }

    initialiser() {
        this.vue = new Vue(this);
    }

    selectionnerOnglet(o) {
        this.vue.selectionnerOnglet(o);
    }
}