import PromptSync from "prompt-sync";
const prompt = PromptSync();

import menuChoice from "./../Fonctions/Menu.js";

import * as AdherentsFunctions from "../Fonctions/MenuFunctions/MenuBiblioFunctions/AdherentsFunctions.js";
import * as LivresFunctions from "./../Fonctions/MenuFunctions/MenuBiblioFunctions/LivresFunctions.js";
import * as EmpruntsFunctions from "./../Fonctions/MenuFunctions/MenuBiblioFunctions/EmpruntsFunctions.js";

class MenuBiblio {
  static choiceOptions = `
    1. Adherent management
    2. Book management
    3. Loan management
    0. Return to main menu
    `;

  static startMenu() {
    console.log(
      "Welcome to the library manager \n Here are the different options available to you : \n"
    );
    setTimeout(this.choiceSelector, 1000);
  }

  static choiceSelector() {
    console.log(MenuBiblio.choiceOptions);
    const choice = prompt("Enter your choice :");
    MenuBiblio.choiceCases(choice);
  }

  static choiceCases(choice) {
    switch (choice) {
      case "1":
        this.adherentMenu();
        break;
      case "2":
        this.livreMenu(prompt);
        break;
      case "3":
        this.empruntMenu(prompt);
        break;
      case "0":
        console.clear();
        console.log("Returning to main menu ...");
        setTimeout(menuChoice, 2000);
        break;
      default:
        console.clear();
        console.log("Please enter a valid choice");
        setTimeout(this.choiceSelector, 2000);
        break;
    }
  }

  //Specific menu for adherents
  static adherentMenu = () => {
    console.log("whats do you  want to do ?");
    console.log(`
      1. List adherents
      2. Get info about an adherent
      3. Create adherent
      4. Update adherent
      5. Delete adherent
      0. Back
      `);

    const choice = prompt("Enter your choice :");

    switch (choice) {
      case "1":
        AdherentsFunctions.displayAllAdherents();
        setTimeout(this.adherentMenu, 2000);
        break;
      case "2":
        AdherentsFunctions.displayAdherent(prompt);
        setTimeout(this.adherentMenu, 2000);
        break;
      case "3":
        AdherentsFunctions.createAdherent(prompt);
        setTimeout(this.adherentMenu, 2000);
        break;
      case "4":
        AdherentsFunctions.updateAdherent(prompt);
        setTimeout(this.adherentMenu, 2000);
        break;
      case "5":
        AdherentsFunctions.deleteAdherent(prompt);
        setTimeout(this.adherentMenu, 2000);
        break;
      case "0":
        console.clear();
        console.log("Returning to previous menu ...");
        setTimeout(this.choiceSelector, 2000);
        break;
      default:
        console.clear();
        console.log("Please enter a valid choice");
        setTimeout(this.adherentMenu, 2000);
        break;
    }
  };

  //Specific menu for books
  static livreMenu = () => {
    console.log("whats do you  want to do ?");
    console.log(`
          1. List livres
          2. Get info about a livre
          3. Create livre
          4. Update livre
          5. Delete livre
          0. Back
          `);

    const choice = prompt("Enter your choice :");

    switch (choice) {
      case "1":
        LivresFunctions.displayAllLivres(prompt);
        setTimeout(this.livreMenu, 2000);
        break;
      case "2":
        LivresFunctions.displayLivre(prompt);
        setTimeout(this.livreMenu, 2000);
        break;
      case "3":
        LivresFunctions.createLivre(prompt);
        setTimeout(this.livreMenu, 2000);
        break;
      case "4":
        LivresFunctions.updateLivre(prompt);
        setTimeout(this.livreMenu, 2000);
        break;
      case "5":
        LivresFunctions.deleteLivre(prompt);
        setTimeout(this.livreMenu, 2000);
        break;
      case "0":
        console.clear();
        console.log("Returning to previous menu ...");
        setTimeout(this.choiceSelector, 2000);
        break;
      default:
        console.clear();
        console.log("Please enter a valid choice");
        setTimeout(this.livreMenu, 2000);
        break;
    }
  };

  //Specific menu for emprunts
  static empruntMenu = () => {
    console.log("whats do you  want to do ?");
    console.log(`
      1. List emprunts
      2. Get info about an emprunt
      3. Create emprunt
      4. Update emprunt
      5. Delete emprunt
      6. check list of books
      7. check list of adherents
      0. Back
      `);

    const choice = prompt("Enter your choice :");

    switch (choice) {
      case "1":
        EmpruntsFunctions.displayAllEmprunts();
        setTimeout(this.empruntMenu, 2000);
        break;
      case "2":
        EmpruntsFunctions.displayEmprunt(prompt);
        setTimeout(this.empruntMenu, 2000);
        break;
      case "3":
        EmpruntsFunctions.createEmprunt(prompt);
        setTimeout(this.empruntMenu, 2000);
        break;
      case "4":
        EmpruntsFunctions.updateEmprunt(prompt);
        setTimeout(this.empruntMenu, 2000);
        break;
      case "5":
        EmpruntsFunctions.deleteEmprunt(prompt);
        setTimeout(this.empruntMenu, 2000);
        break;
      case "6":
        LivresFunctions.displayAllLivres(prompt);
        setTimeout(this.empruntMenu, 2000);
        break;
      case "7":
        AdherentsFunctions.displayAllAdherents();
        setTimeout(this.empruntMenu, 2000);
        break;
      case "0":
        console.clear();
        console.log("Returning to previous menu ...");
        setTimeout(this.choiceSelector, 2000);
        break;
      default:
        console.clear();
        console.log("Please enter a valid choice");
        setTimeout(this.empruntMenu, 2000);
        break;
    }
  };
}

export default MenuBiblio;
