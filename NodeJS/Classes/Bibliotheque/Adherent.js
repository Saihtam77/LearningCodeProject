class Adherent {

  #numeroAdherent;
  #prenom;
  #nom;
  #adresse;
  #mail;

  constructor(numeroAdherent, prenom, nom, adresse, mail) {
    this.#numeroAdherent = numeroAdherent;
    this.#prenom = prenom;
    this.#nom = nom;
    this.#adresse = adresse;
    this.#mail = mail;
  }

  //getter
  getNumeroAdherent() {
    return this.#numeroAdherent;
  }

  getPrenom() {
    return this.#prenom;
  }

  getFullName(){
    return this.#prenom + " " + this.#nom;
  }

  getNom() {
    return this.#nom;
  }

  getAdresse() {
    return this.#adresse;
  }

  getMail() {
    return this.#mail;
  }

  //setter

  setNumeroAdherent(numeroAdherent) {
    this.#numeroAdherent = numeroAdherent;
  }

  setPrenom(prenom) {
    this.#prenom = prenom;
  }

  setNom(nom) {
    this.#nom = nom;
  }

  setAdresse(adresse) {
    this.#adresse = adresse;
  }

  setMail(mail) {
    this.#mail = mail;
  }

  //methode

  displayInfo() {
    console.log(
      `Numero adherent : ${this.getNumeroAdherent()} \nPrenom : ${this.getPrenom()} \nNom : ${this.getNom()} \nAdresse : ${this.getAdresse()} \nMail : ${this.getMail()}`
    );
  }
}

export default Adherent;
