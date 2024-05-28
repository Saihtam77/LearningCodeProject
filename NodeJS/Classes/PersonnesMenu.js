import * as PersonnesMenuFunctions from "./../Fonctions/MenuFunctions/PersonnesMenuFunctions.js";
import menuChoice from './../Fonctions/Menu.js';

import PromptSync from "prompt-sync";
const prompt = PromptSync();

class PersonnesMenu {
  static choiceOption = `
    * 1. Create a person
    * 2. Display the list of person
    * 3. Display info of a person
    * 4. Modify the person
    * 5. Delete a person
    * 8. Exit
    `;

  //methode

  static startMenu() {
    console.log("Welcome to the  charather design menu");
    setTimeout(this.choiceSelector, 1000);
  }

  static choiceSelector() {
    console.log(PersonnesMenu.choiceOption);
    const choice = prompt("Enter your choice :");
    PersonnesMenu.choiceCases(choice);
  }

  static choiceCases(choice) {
    switch (choice) {
      case "1":
        PersonnesMenuFunctions.createPerson(prompt);
        setTimeout(this.choiceSelector, 2000);
        break;

      case "2":
        PersonnesMenuFunctions.displayAllPerson();
        setTimeout(this.choiceSelector, 2000);
        break;
      
      case "3":
        PersonnesMenuFunctions.displayPerson(prompt);
        setTimeout(this.choiceSelector, 2000);
        break;

      case "4":
        PersonnesMenuFunctions.modifyPerson(prompt);
        setTimeout(this.choiceSelector, 2000);
        break;
      
      case "5":
        PersonnesMenuFunctions.deletePerson(prompt);
        setTimeout(this.choiceSelector, 2000);
        break;


      case "8":
        console.log("Thank you for using our program !");
        menuChoice();
        break;

      default:
        console.log("Invalid choice, please try again !");
        setTimeout(this.choiceSelector, 2000);
    }
  }
}

export default PersonnesMenu;
