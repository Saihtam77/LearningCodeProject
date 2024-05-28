import CompoteBancaire from "./CompteBancaire.js";

class CompteEpargne extends CompoteBancaire {

    #tauxInteret;

    constructor(titulaire, solde, tauxInteret) {
        super(titulaire, solde);
        this.#tauxInteret = 0.03;
    }

    //getter
    getTauxInteret() {
        return this.#tauxInteret;
    }

    //setter
    setTauxInteret(tauxInteret) {
        this.#tauxInteret = tauxInteret;
    }

    //methode
    depotAvecInteret(montant) {
        montant += montant * this.#tauxInteret;
        this.depot(montant);
    }

    
        

}

export default CompteEpargne;