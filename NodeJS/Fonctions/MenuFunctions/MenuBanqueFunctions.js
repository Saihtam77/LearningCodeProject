import CompteBancaire from "./../../Classes/Banque/CompteBancaire.js";
import CompteEpargne from "./../../Classes/Banque/CompteEpargne.js";

import PromptSync from "prompt-sync";
const prompt = PromptSync();

let listComptes = [];
let listComptesEpargne = [];

//Compte functions
const afficherComptes = () => {
  if (listComptes.length === 0) {
    console.log("No account to display !");
    return;
  }
  console.log("Liste des comptes : ");
  listComptes.forEach((compte) => {
    console.log(`${compte.getTitulaire()}`);
  });
};

const creerCompte = (prompt) => {
  const nom = prompt("Entrez le nom du compte : ");
  const solde = parseInt(prompt("Entrez le solde du compte : "));
  const compte = new CompteBancaire(nom, solde);
  listComptes.push(compte);
  console.log(
    `Le compte ${compte.getTitulaire()} a été créé avec un solde de ${compte.getSolde()}`
  );
};

const depotCompte = (prompt) => {
  const nom = prompt(
    "Entrez le nom du compte ou vous souhaitez faire un depôt : "
  );
  const montant = parseInt(prompt("Entrez le montant du depôt : "));
  //find the account
  if (listComptes.length === 0) {
    console.log("No account to deposit !");
  } else {
    const compte = listComptes.find((compte) => compte.getTitulaire() === nom);
    //deposit the amount
    compte.depot(montant);
    console.log(
      `Le montant de ${montant} a été déposé sur le compte de ${compte.getTitulaire()}`
    );
    console.log(`Le solde du compte est de ${compte.getSolde()}`);
  }
};

const retraitCompte = (prompt) => {
  const nom = prompt(
    "Entrez le nom du compte ou vous souhaitez faire un retrait : "
  );
  const montant = parseInt(prompt("Entrez le montant du retrait : "));

  //find the account
  if (listComptes.length === 0) {
    console.log("No account to withdraw !");
  } else {
    const compte = listComptes.find((compte) => compte.getTitulaire() === nom);
    //withdraw the amount
    compte.retrait(montant);
    console.log(
      `Le montant de ${montant} a été retiré du compte de ${compte.getTitulaire()}`
    );
    console.log(`Le solde du compte est de ${compte.getSolde()}`);
  }
};

const soldeCompte = (prompt) => {
  const nom = prompt(
    "Entrez le nom du compte dont vous souhaitez voir le solde : "
  );

  //find the account
  if (listComptes.length === 0) {
    console.log("No account to display !");
  } else {
    const compte = listComptes.find((compte) => compte.getTitulaire() === nom);
    console.log(
      `Le solde du compte de ${compte.getTitulaire()} est de ${compte.getSolde()}`
    );
  }
};

//Epargne functions
const afficherComptesEpargne = () => {
  if (listComptesEpargne.length === 0) {
    console.log("No account to display !");
    return;
  }
  console.log("Liste des comptes epargne : ");
  listComptesEpargne.forEach((compte) => {
    console.log(`${compte.getTitulaire()}`);
  });
};

const creerEpargne = (prompt) => {
  const nom = prompt("Entrez le nom du compte epargne : ");
  const solde = parseInt(prompt("Entrez le solde du compte epargne : "));
  const tauxInteret = 0.03;
  const compte = new CompteEpargne(nom, solde, tauxInteret);
  listComptesEpargne.push(compte);
  console.log(
    `Le compte epargne de ${compte.getTitulaire()} a été créé avec un solde de ${compte.getSolde()} et un taux d'interet de ${compte.getTauxInteret()}`
  );
};

const depotEpargne = (prompt) => {
  const nom = prompt(
    "Entrez le nom du compte epargne ou vous souhaitez faire un depôt : "
  );
  const montant = parseInt(prompt("Entrez le montant du depôt : "));
  //find the account
  if (listComptesEpargne.length === 0) {
    console.log("No account to deposit !");
  } else {
    const compte = listComptesEpargne.find(
      (compte) => compte.getTitulaire() === nom
    );
    //deposit the amount
    compte.depotAvecInteret(montant);
    console.log(
      `Le montant de ${montant} a été déposé sur le compte epargne de ${compte.getTitulaire()}`
    );
    console.log(`Le solde du compte epargne est de ${compte.getSolde()}`);
  }
};

const retraitEpargne = (prompt) => {
  const nom = prompt(
    "Entrez le nom du compte epargne ou vous souhaitez faire un retrait : "
  );
  const montant = parseInt(prompt("Entrez le montant du retrait : "));

  //find the account
  if (listComptesEpargne.length === 0) {
    console.log("No account to withdraw !");
  } else {
    const compte = listComptesEpargne.find(
      (compte) => compte.getTitulaire() === nom
    );
    //withdraw the amount
    compte.retrait(montant);
    console.log(
      `Le montant de ${montant} a été retiré du compte epargne de ${compte.getTitulaire()}`
    );
    console.log(`Le solde du compte epargne est de ${compte.getSolde()}`);
  }
};

const soldeEpargne = (prompt) => {
  const nom = prompt(
    "Entrez le nom du compte epargne dont vous souhaitez voir le solde : "
  );

  //find the account
  if (listComptesEpargne.length === 0) {
    console.log("No account to display !");
  } else {
    const compte = listComptesEpargne.find(
      (compte) => compte.getTitulaire() === nom
    );
    console.log(
      `Le solde du compte epargne de ${compte.getTitulaire()} est de ${compte.getSolde()}`
    );
  }
};

export {
  afficherComptes,
  creerCompte,
  depotCompte,
  retraitCompte,
  soldeCompte,
  afficherComptesEpargne,
  creerEpargne,
  depotEpargne,
  retraitEpargne,
  soldeEpargne,
};
