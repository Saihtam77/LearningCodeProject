import * as MenuNumberFunctions from "./../Fonctions/MenuFunctions/MenuNumberFunction.js";
import menuChoice from "./../Fonctions/Menu.js";

import PromptSync from "prompt-sync";

const prompt = PromptSync();

class MenuNumber {
  static choiceOption = `
    1. Make a factorial
    2. FizzBuzz
    3. Max number
    4. Multiplication table
    5. Paire or not
    6. Positive or negative
    7. Return invers number
    8. Sum number
    0. Exit
    
    `;

  static startMenu() {
    console.log("Welcome to the number menu");
    setTimeout(this.choiceSelector, 1000);
  }

  static choiceSelector() {
    console.log(MenuNumber.choiceOption);
    const choice = prompt("Enter your choice :");
    MenuNumber.choiceCases(choice);
  }

  static choiceCases(choice) {
    switch (choice) {
      case "1":
        MenuNumberFunctions.factorial(prompt);
        setTimeout(this.choiceSelector, 2000);
        break;
      case "2":
        MenuNumberFunctions.fizzBuzz(prompt);
        setTimeout(this.choiceSelector, 2000);
        break;

      case "3":
        MenuNumberFunctions.maxNumber(prompt);
        setTimeout(this.choiceSelector, 2000);
        break;

      case "4":
        MenuNumberFunctions.multiplicationTable(prompt);
        setTimeout(this.choiceSelector, 2000);
        break;

      case "5":
        MenuNumberFunctions.paireOrNot(prompt);
        setTimeout(this.choiceSelector, 2000);
        break;

      case "6":
        MenuNumberFunctions.positiveOrNegative(prompt);
        setTimeout(this.choiceSelector, 2000);
        break;

      case "7":
        MenuNumberFunctions.returnInversNumber(prompt);
        setTimeout(this.choiceSelector, 2000);
        break;

      case "8":
        MenuNumberFunctions.sumNumber();
        setTimeout(this.choiceSelector, 2000);
        break;

      case "0":
        console.log("Thank you for using our program !");
        menuChoice();
        break;
    }
  }
}

export default MenuNumber;
