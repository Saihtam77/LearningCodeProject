class CompoteBancaire {

    #titulaire;
    #solde;

    constructor(titulaire, solde) {
        this.#titulaire = titulaire;
        this.#solde = solde;
    }

    //getter
    getTitulaire() {
        return this.#titulaire;
    }

    getSolde() {
        return this.#solde;
    }

    //setter

    setTitulaire(titulaire) {
        this.#titulaire = titulaire;
    }

    setSolde(solde) {
        this.#solde = solde;
    }

    //methode 

    depot(montant) {
        this.#solde += montant;
    }

    retrait(montant) {
        this.#solde -= montant;
    }
}

export default CompoteBancaire;
