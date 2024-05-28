class Emprunts {
     #id;
     #adherent;
     #livre;
     #dateEmprunt;
     #dateRetour;

     constructor(id, adherent, livre, dateEmprunt, dateRetour) {
          this.#id = id;
          this.#adherent = adherent;
          this.#livre = livre;
          this.#dateEmprunt = dateEmprunt;
          this.#dateRetour = dateRetour;
     }

     //getter
     getId() {
          return this.#id;
     }
     getAdherent() {
          return this.#adherent;
     }

     getLivre() {
          return this.#livre;
     }

     getDateEmprunt() {
          return this.#dateEmprunt;
     }

     getDateRetour() {
          return this.#dateRetour;
     }

     //setter

     setAdherent(adherent) {
          this.#adherent = adherent;
     }

     setLivre(livre) {
          this.#livre = livre;
     }

     setDateEmprunt(dateEmprunt) {
          this.#dateEmprunt = dateEmprunt;
     }

     setDateRetour(dateRetour) {
          this.#dateRetour = dateRetour;
     }

     //methode

     displayInfo() {
      return (`Id:${this.getId()} Adherent : ${this.getAdherent()} Livre : ${this.getLivre()} Date d'emprunt : ${this.getDateEmprunt()} Date de retour : ${this.getDateRetour()}`);
     }
}

export default Emprunts;
