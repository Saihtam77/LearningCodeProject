import menuChoice from "../Fonctions/Menu.js";
import * as MenuDicoFunctions from "../Fonctions/MenuFunctions/MenuDicoFunctions.js";

import PromptSync from "prompt-sync";

const prompt = PromptSync();

class MenuDico {
  //attributes
  static choiceOption = `
        * 1. Ajouter une tâche
        * 2. Marquer comme terminer
        * 3. Afficher liste des tâches
        * 4. Modifier une tâche
        * 5. Supprimer une tâche 
        * 6. Retour au menu principal
        `;

  //methode

  static StartMenu() {
    console.log(
      "Bienvenue dans le gestionnaire de tâches \n Voici les différentes options qui s'offrent à vous : \n"
    );
    setTimeout(this.choiceSelector, 1000);
  }

  static choiceSelector() {
    console.log(MenuDico.choiceOption);
    const choice = prompt("Entrez votre choix :");
    MenuDico.choiceCases(choice);
  }

  static choiceCases(choice) {
    switch (choice) {
      case "1":
        MenuDicoFunctions.ajouterTache(prompt);
        setTimeout(this.choiceSelector, 2000);
        break;
      case "2":
        MenuDicoFunctions.marquerTerminer(prompt);
        setTimeout(this.choiceSelector, 2000);
        break;
      case "3":
        MenuDicoFunctions.afficherListeTaches(prompt);
        setTimeout(this.choiceSelector, 2000);
        break;

      case "4":
        MenuDicoFunctions.editTache(prompt);
        setTimeout(this.choiceSelector, 2000);
        break;

      case "5":
        MenuDicoFunctions.supprimerTache(prompt);
        setTimeout(this.choiceSelector, 2000);
        break;

      case "6":
        console.log("Merci d'avoir utilisé notre gestionnaire de tâches");
        menuChoice();
        break;
      default:
        console.log("Veuillez entrer un choix valide");
        setTimeout(this.choiceSelector, 2000);
        break;
    }
  }
}

export default MenuDico;
