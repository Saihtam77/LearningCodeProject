class Livres {
  #titre;
  #auteur;
  #isbn;
  #emprunt = false;

  constructor(titre, auteur, isbn) {
    this.#titre = titre;
    this.#auteur = auteur;
    this.#isbn = isbn;
  }

  //getter
  getTitre() {
    return this.#titre;
  }

  getAuteur() {
    return this.#auteur;
  }

  getIsbn() {
    return this.#isbn;
  }

  getEmprunt() {
    return this.#emprunt;
  }

  //setter

  setTitre(titre) {
    this.#titre = titre;
  }

  setAuteur(auteur) {
    this.#auteur = auteur;
  }

  setIsbn(isbn) {
    this.#isbn = isbn;
  }

  setEmprunt(emprunt) {
    this.#emprunt = emprunt;
  }

  //methode
  displayInfo() {
    console.log(
      `Titre : ${this.getTitre()} \nAuteur : ${this.getAuteur()} \nISBN : ${this.getIsbn()} \nEmprun : ${this.getEmprunt()}`
    );
  }
}

export default Livres;
