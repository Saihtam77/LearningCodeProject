import Livres from "../../../Classes/Bibliotheque/Livres.js";

let listLivres = [];

const displayAllLivres = (prompt) => {
  console.log("List of all books :");
  listLivres.forEach((livre) => {
    console.log(`${livre.getTitre()} \n`);
  });
};

const displayLivre = (prompt) => {
  const titre = prompt("Enter the titre of the book :");

  const livre = listLivres.find((livre) => livre.getTitre() === titre);

  if (livre) {
    console.log(`\nHere is the information of the livre ${livre.getTitre()} :`);
    livre.displayInfo();
  } else {
    console.log("\nLivre not found");
  }
};

const createLivre = (prompt) => {
  const titre = prompt("Enter the titre of the book :");
  const auteur = prompt("Enter the auteur of the book :");
  const isbn = Math.floor(Math.random() * 1000000000000);

  const livre = new Livres(titre, auteur, isbn);
  listLivres.push(livre);
  console.log(`\nLivre ${livre.getTitre()} created`);
};

const updateLivre = (prompt) => {
  const titre = prompt("Enter the titre of the book :");

  const livre = listLivres.find((livre) => livre.getTitre() === titre);

  if (livre) {
    const titre = prompt("Enter the titre of the book :");
    const auteur = prompt("Enter the auteur of the book :");

    livre.setTitre(titre);
    livre.setAuteur(auteur);

    console.log(`\nLivre ${livre.getTitre()} updated`);
  } else {
    console.log("\nLivre not found");
  }
};

const deleteLivre = (prompt) => {
  const titre = prompt("Enter the titre of the book :");

  const livre = listLivres.find((livre) => livre.getTitre() === titre);

  if (livre) {
    listLivres = listLivres.filter((livre) => livre.getTitre() !== titre);
    console.log(`\nLivre ${livre.getTitre()} deleted`);
  } else {
    w;
    console.log("\nLivre not found");
  }
};

export {
  displayAllLivres,
  displayLivre,
  createLivre,
  deleteLivre,
  updateLivre,
  listLivres,
};
