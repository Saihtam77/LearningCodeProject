import Adherent from "../../../Classes/Bibliotheque/Adherent.js";

let listAdherents = [];

const displayAllAdherents = () => {
  if (listAdherents.length === 0) {
    console.log("No adherents to display");
  } else {
    listAdherents.forEach((adherent) => {
      console.log(`${adherent.getNumeroAdherent()}. ${adherent.getNom()} ${adherent.getPrenom()} \n`);
    });
  }
};

const displayAdherent = (prompt) => {
  if (listAdherents.length === 0) {
    console.log("No adherents to display");
  } else {
    
    const numeroAdherent = prompt("Enter the adherent's number :");
    
    const adherent = listAdherents.find(
      (adherent) => adherent.getNumeroAdherent() == numeroAdherent
    );

    if (adherent) {
      console.log(`\nVoici les informations de l'adherent ${adherent.getNom()} :`);
      adherent.displayInfo();
    } else {
      console.log("\nAdherent not found");
    }
  }
};

const createAdherent = (prompt) => {
  const numeroAdherent = listAdherents.length + 1;

  const prenom = prompt("Enter adherent's first name :");
  const nom = prompt("Enter adherent's last name :");
  const adresse = prompt("Enter adherent's address :");
  const mail = prompt("Enter adherent's email :");

  const adherent = new Adherent(numeroAdherent, prenom, nom, adresse, mail);
  listAdherents.push(adherent);
  console.log(
    `Adherent ["${adherent.getNom()} ${adherent.getPrenom()}"] created`
  );
};

const updateAdherent = (prompt) => {
  if (listAdherents.length === 0) {
    console.log("No adherents to update");
  } else {
    const numeroAdherent = prompt("Enter the adherent's number :");

    const adherent = listAdherents.find(
      (adherent) => adherent.getNumeroAdherent() == numeroAdherent
    );

    if (adherent) {
      const prenom = prompt("Enter adherent's first name :");
      const nom = prompt("Enter adherent's last name :");
      const adresse = prompt("Enter adherent's address :");
      const mail = prompt("Enter adherent's email :");

      adherent.setPrenom(prenom);
      adherent.setNom(nom);
      adherent.setAdresse(adresse);
      adherent.setMail(mail);

      console.log(
        `Adherent ["${adherent.getNom()} ${adherent.getPrenom()}"] updated`
      );
    } else {
      console.log("\nAdherent not found");
    }
  }
};

const deleteAdherent = (prompt) => {
  if (listAdherents.length === 0) {
    console.log("No adherents to delete");
  } else {
    const numeroAdherent = prompt("Enter the adherent's number :");

    const adherent = listAdherents.find(
      (adherent) => adherent.getNumeroAdherent() == numeroAdherent
    );

    if (adherent) {
      listAdherents = listAdherents.filter(
        (adherent) => adherent.getNumeroAdherent() != numeroAdherent
      );
      console.log(
        `Adherent ["${adherent.getNom()} ${adherent.getPrenom()}"] deleted`
      );
    } else {
      console.log("\nAdherent not found");
    }
  }
};

export {
  createAdherent,
  updateAdherent,
  deleteAdherent,
  displayAdherent,
  displayAllAdherents,
  listAdherents,
};
