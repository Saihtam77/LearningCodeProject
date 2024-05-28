
import MenuString from "./../Classes/MenuString.js";
import MenuTables from "./../Classes/MenuTables.js";
import MenuDico from "./../Classes/MenuDico.js";
import MenuBanque from "./../Classes/MenuBanque.js";
import PersonnesMenu from "./../Classes/PersonnesMenu.js";
import MysticalCreatureMenu from "./../Classes/MysticalCreatureMenu.js";
import MenuNumber from "./../Classes/MenuNumber.js";

import PromptSync from "prompt-sync";
import MenuBiblio from "../Classes/MenuBiblio.js";

const prompt = PromptSync();

const menuChoice = () => {
  console.log(` 
      * 1. Menu String
      * 2. Menu Tableaux
      * 3. Menu Dictionnaire
      * 4. MysticalCreature
      * 5. CharacDesign
      * 6. Banque
      * 7. Menu Number
      * 8. Bibliothèque
      * 0. Quitter
    `
  );

  const choice = prompt("Entrez votre choix :");

  switch (choice) {
    case "1":
      MenuString.StartMenu();
      break;
    case "2":
      MenuTables.StartMenu();
      break;
    case "3":
      MenuDico.StartMenu();
      break;
    case "4":
      MysticalCreatureMenu.startMenu();
      break;
    case "5":
      PersonnesMenu.startMenu();
      break;
    case "6":
      MenuBanque.startMenu();
      break;
    case "7":
      MenuNumber.startMenu();
      break;
    case "8":
      MenuBiblio.startMenu();
      break;
    case "0":
      console.log("Merci d'avoir utilisé notre service");
      break;
    default:
      console.log("Choix invalide veuillez choisir un menu valide ...");
      setTimeout(menuChoice(), 2000);
      break;
  }
};

export default menuChoice;
