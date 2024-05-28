import menuChoice from "../Fonctions/Menu.js";
import * as MysticalCreatureFunctions from "../Fonctions/MenuFunctions/MysticalCreatureFunctions.js";

import PromptSync from "prompt-sync";
const prompt = PromptSync();

class MysticalCreatureMenu {
  static choiceOption = `
    * 1. Afficher la liste des créatures
    * 2. Créer une créature
    * 3. recupérer les informations d'une créature
    * 4. faire une action avec une créature
    * 5. Retour au menu principal
    `;


    static startMenu() {
        console.log("Bienvenue dans votre gestionnaire de créatures mystiques")
        setTimeout(this.choiceSelector, 1000)
    }

    static choiceSelector() {
        console.log(MysticalCreatureMenu.choiceOption)
        const choice = prompt("Entrez votre choix : ")
        MysticalCreatureMenu.choiceCases(choice)
    }

    static choiceCases(choice) {
        switch (choice) {
            case "1":
                MysticalCreatureFunctions.afficherCreatures()
                setTimeout(this.choiceSelector, 2000)
                break
            case "2":
                MysticalCreatureFunctions.creerCreature(prompt)
                setTimeout(this.choiceSelector, 2000)
                break
            case "3":
                MysticalCreatureFunctions.infosCreature(prompt)
                setTimeout(this.choiceSelector, 2000)
                break
            case "4":
                MysticalCreatureFunctions.actionCreature(prompt)
                setTimeout(this.choiceSelector, 2000)
                break
            case "5":
                console.log("Merci d'avoir utilisé notre programme !");
                menuChoice()
                break
            default:
                console.log("Choix invalide")
                setTimeout(this.choiceSelector, 2000)
        }
    }
}

export default MysticalCreatureMenu;
