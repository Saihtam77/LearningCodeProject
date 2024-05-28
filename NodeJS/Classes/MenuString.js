import menuChoice from "../Fonctions/Menu.js";
import * as MenuStringFunctions from "../Fonctions/MenuFunctions/MenuStringFunctions.js";

import PromptSync from "prompt-sync";

const prompt = PromptSync();

class MenuString {
  //attributes
  static choiceOption = `
    * 1. compter les mots dans une phrase
    * 2. Inverser un mot
    * 3. Remplacer un mot
    * 4. Verifier si Palindrome
    * 5. Compter les carathère dans une chaîne
    * 6. Extraire les lettres uniques d'une chaîne
    * 7. Compter les voyelles dans une chaîne
    * 8. Convertie les minuscules en majuscules et vice versa
    * 9. Retour au menu principal
    `;

  //String Methode

  static StartMenu() {
    console.log(
      "Welcome to the string manipulation program \n Here the different options available to you : \n"
    );
    setTimeout(this.choiceSelector, 1000);
  }

  static choiceSelector() {
    console.log(MenuString.choiceOption);
    const choice = prompt("Entrez votre choix :");
    MenuString.choiceCases(choice);
  }

  static choiceCases(choice) {
    switch (choice) {
      case "1":
        MenuStringFunctions.wordCount(prompt);
        setTimeout(this.choiceSelector, 2000);
        break;
      case "2":
        MenuStringFunctions.ReverseWord(prompt);
        setTimeout(this.choiceSelector, 2000);
        break;
      case "3":
        MenuStringFunctions.replaceWord(prompt);
        setTimeout(this.choiceSelector, 2000);
        break;
      case "4":
        MenuStringFunctions.isPalindrome(prompt);
        setTimeout(this.choiceSelector, 2000);
        break;
      case "5":
        MenuStringFunctions.stringLength(prompt);
        setTimeout(this.choiceSelector, 2000);
        break;
      case "6":
        MenuStringFunctions.uniqueLetters(prompt);
        setTimeout(this.choiceSelector, 2000);
        break;
      case "7":
        MenuStringFunctions.countVowels(prompt);
        setTimeout(this.choiceSelector, 2000);
        break;
      case "8":
        MenuStringFunctions.ConvertminMaj(prompt);
        setTimeout(this.choiceSelector, 2000);
        break;
      case "9":
        console.log("Merci d'avoir utilisé notre programme de manipulation de chaîne");
        menuChoice();
        break;
      default:
        console.log("Choix invalide. Recommencez");
        setTimeout(this.choiceSelector, 1000);
    }
  }
}

export default MenuString;
