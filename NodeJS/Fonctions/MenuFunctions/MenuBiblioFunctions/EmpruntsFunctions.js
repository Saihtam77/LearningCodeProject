import Emprunts from "../../../Classes/Bibliotheque/Emprunts.js";
import { listLivres } from "./LivresFunctions.js";
import { listAdherents } from "./AdherentsFunctions.js";

let listEmprunts = [];

//date getter format : dd/mm/yyyy
const dategetter = () => {
  const date = new Date();
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
};

const displayAllEmprunts = () => {
  if (listEmprunts.length === 0) {
    console.log("There are no emprunts in the list");
  } else {
    listEmprunts.forEach((emprunt) => {
      console.log(emprunt.displayInfo());
    });
  }
};

const displayEmprunt = (prompt) => {
  if (listEmprunts.length === 0) {
    console.log("There are no emprunts in the list");
  } else {
    const id = prompt("Enter the id of the emprunt you want to see :");
    const emprunt = listEmprunts.find((emprunt) => emprunt.getId() === id);
    if (emprunt) {
      console.log(emprunt.displayInfo());
    } else {
      console.log("Emprunt not found");
    }
  }
};

const createEmprunt = (prompt) => {
  //Search function
  //livre search in listLivres
  const booksearch = () => {
    let livreToLoan = prompt("Enter the titre of the book :");
    if (listLivres.length === 0) {
      console.log("There are no books in the list");
    } else {
      const livre = listLivres.find(
        (livre) => livre.getTitre() === livreToLoan
      );
      if (livre) {
        console.log("Book found");
        return livre;
      } else {
        console.log("Book not found");
        return false;
      }
    }
  };
  //adherent search in listAdherents
  const adherentsearch = () => {
    let adherentToLoan = prompt("Enter the nuber of the adherent :");
    if (listAdherents.length === 0) {
      console.log("There are no adherents in the list");
    } else {
      const adherent = listAdherents.find(
        (adherent) => adherent.getNumeroAdherent() == adherentToLoan
      );
      if (adherent) {
        console.log("Adherent found");
        return adherent;
      } else {
        console.log("Adherent not found");
        return false;
      }
    }
  };

  const id = listEmprunts.length + 1;
  const dateEmprunt = dategetter();
  const dateRetour = prompt("Enter the date of return :");
  const livre = booksearch();
  const adherent = adherentsearch();

  if (livre && adherent) {
    livre.setEmprunt(true);
    const emprunt = new Emprunts(id, adherent.getFullName(), livre.getTitre(), dateEmprunt, dateRetour);
    console.log(`Emprunt created successfully : ${emprunt.displayInfo()}`);
    listEmprunts.push(emprunt);
  } else {
    console.log("Emprunt creation failed");
    return;
  }
};

const deleteEmprunt = (prompt) => {
  if (listEmprunts.length === 0) {
    console.log("There are no emprunts in the list");
  } else {
    const id = prompt("Enter the id of the emprunt you want to delete :");
    const emprunt = listEmprunts.find((emprunt) => emprunt.getId() == id);
    if (emprunt) {
      listEmprunts = listEmprunts.filter((emprunt) => emprunt.getId() !== id);
      console.log(`Emprunt with id : ${id} has been deleted successfully`);
    } else {
      console.log("Emprunt not found");
    }
  }
};

const updateEmprunt = (prompt) => {
  if (listEmprunts.length === 0) {
    console.log("There are no emprunts in the list");
  } else {
    const id = prompt("Enter the id of the emprunt you want to update :");
    const emprunt = listEmprunts.find((emprunt) => emprunt.getId() == id);
    if (emprunt) {
      const dateRetour = prompt("Enter the new date of return :");
      const livre = prompt("Enter the new livre :");
      const adherent = prompt("Enter the new adherent :");
      emprunt.setDateRetour(dateRetour);
      console.log(`Emprunt with id : ${id} has been updated successfully`);
    } else {
      console.log("Emprunt not found");
    }
  }
};

export {
  displayAllEmprunts,
  displayEmprunt,
  createEmprunt,
  deleteEmprunt,
  updateEmprunt,
  listEmprunts,
};
