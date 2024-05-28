import menuChoice from "../Fonctions/Menu.js";
import * as MenuTablesFunctions from "../Fonctions/MenuFunctions/MenuTablesFunctions.js";

import PromptSync from "prompt-sync";

const prompt = PromptSync();

class MenuTables {
  static choiceOption = `
    * 1. créer un tableau
    * 2. Fusionner deux tableaux sans doublons
    * 3. Trouver les éléments uniques d'un tableau
    * 4. Additionner deux tableaux
    * 5. Trouver maw et min d'un tableau
    * 6. Extraire les lettres uniques d'une chaîne
    * 7. Compter les voyelles dans une chaîne
    * 8. Convertie les minuscules en majuscules et vice versa
    * 9. Retour au menu principal
    `;

  //methodes

  static StartMenu() {
    console.log(
      "Welcome to the string manipulation program \n Here the different options available to you : \n"
    );
    setTimeout(this.choiceSelector, 1000);
  }

  static choiceSelector() {
    console.log(MenuTables.choiceOption);
    const choice = prompt("Entrez votre choix :");
    MenuTables.choiceCases(choice);
  }

  static choiceCases(choice) {
    switch (choice) {
      case "1":
        MenuTablesFunctions.createTable(prompt);
        setTimeout(this.choiceSelector, 2000);
        break;

      case "2":
        MenuTablesFunctions.tablesFusion(prompt);
        setTimeout(this.choiceSelector, 2000);
        break;

      case "3":
        MenuTablesFunctions.findUniqueElements(prompt);
        setTimeout(this.choiceSelector, 2000);
        break;

      case "4":
        MenuTablesFunctions.sumTable(prompt);
        setTimeout(this.choiceSelector, 2000);
        break;

      case "5":
        MenuTablesFunctions.findMinMax(prompt);
        setTimeout(this.choiceSelector, 2000);
        break;

      case "9":
        console.log("Merci d'avoir utilisé notre programme !");
        menuChoice();
        break;

      default:
        console.log("Choix invalide, veuillez réessayer !");
        setTimeout(this.choiceSelector, 2000);
    }
  }
}

export default MenuTables;
