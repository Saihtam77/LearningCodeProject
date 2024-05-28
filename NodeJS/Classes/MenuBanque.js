import menuChoice from './../Fonctions/Menu.js';
import * as MenuBanqueFunctions from './../Fonctions/MenuFunctions/MenuBanqueFunctions.js';

import PromptSync from "prompt-sync";
const prompt = PromptSync();

class MenuBanque{

    static choiceOption = `
    * 1. Afficher la liste des comptes
    * 2. Créer un compte
    * 3. Faire un dépôt
    * 4. Faire un retrait
    * 5. Afficher la solde du compte
    * 
    * 6. Afficher la liste des comptes epargne
    * 7. Créer une epargne
    * 8. Faire un dépôt sur le compte epargne
    * 9. Faire un retrait sur le compte epargne
    * 10. Afficher la solde du compte epargne
    * 
    * 0. Quitter
    `

    static startMenu(){
        console.log("Bienvenue dans votre gestionnaire banquaire")
        setTimeout(this.choiceSelector, 1000)
    }

    static choiceSelector(){
        console.log(MenuBanque.choiceOption)
        const choice = prompt("Entrez votre choix : ")
        MenuBanque.choiceCases(choice)
    }

    static choiceCases(choice){
        switch(choice){
            case "1":
                MenuBanqueFunctions.afficherComptes()
                setTimeout(this.choiceSelector, 2000)
                break
            case "2":
                MenuBanqueFunctions.creerCompte(prompt)
                setTimeout(this.choiceSelector, 2000)
                break
            case "3":
                MenuBanqueFunctions.depotCompte(prompt)
                setTimeout(this.choiceSelector, 2000)
                break
            case "4":
                MenuBanqueFunctions.retraitCompte(prompt)
                setTimeout(this.choiceSelector, 2000)
                break
            case "5":
                MenuBanqueFunctions.soldeCompte(prompt)
                setTimeout(this.choiceSelector, 2000)
                break
            case "6":
                MenuBanqueFunctions.afficherComptesEpargne()
                setTimeout(this.choiceSelector, 2000)
                break
            case "7":
                MenuBanqueFunctions.creerEpargne(prompt)
                setTimeout(this.choiceSelector, 2000)
                break
            case "8":
                MenuBanqueFunctions.depotEpargne(prompt)
                setTimeout(this.choiceSelector, 2000)
                break
            case "9":
                MenuBanqueFunctions.retraitEpargne(prompt)
                setTimeout(this.choiceSelector, 2000)
                break
            case "10":
                MenuBanqueFunctions.soldeEpargne(prompt)
                setTimeout(this.choiceSelector, 2000)
                break
            case "0":
                console.log("Merci et à bientôt")
                menuChoice()
                break
                
            default:
                console.log("Choix invalide")
                setTimeout(this.choiceSelector, 2000)
                break
        }
            
    }
}

export default MenuBanque