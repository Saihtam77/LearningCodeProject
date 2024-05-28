import Dragon from "./../../Classes/Creatures/Dragon.js";
import Licorne from "./../../Classes/Creatures/Licorne.js";
import Griffon from "./../../Classes/Creatures/Griffon.js";

let listCreatures = [];

const afficherCreatures = () => {
  if (listCreatures.length === 0) {
    console.log("Aucune créature n'a été créée");
    return;
  }
  console.log("Voici la liste des créatures :");
  listCreatures.forEach((creature) => {
    console.log(creature.getName());
  });
};

const creerCreature = (prompt) => {
  console.log("Vous avez le choix entre 3 créatures a créer :");
  console.log("1. Dragon");
  console.log("2. Licorne");
  console.log("3. Griffon");

  const choix = prompt("Entrez votre choix : ");

  let name, size, power;
  switch (choix) {
    case "1":
      console.log("Vous avez choisi de créer un Dragon");
      name = prompt("Entrez le nom de votre Dragon : ");
      size = parseFloat(prompt("Entrez la taille de votre Dragon : "));
      power = prompt("Entrez le pouvoir de votre Dragon : ");

      const dragon = new Dragon(name, size, power);
      listCreatures.push(dragon);
      console.log(`Votre Dragon a été créé avec succès : ${dragon.getName()}`);
      break;
    case "2":
      console.log("Vous avez choisi de créer une Licorne");
      name = prompt("Entrez le nom de votre Licorne : ");
      size = parseFloat(prompt("Entrez la taille de votre Licorne : "));
      power = prompt("Entrez le pouvoir de votre Licorne : ");

      const licorne = new Licorne(name, size, power);
      listCreatures.push(licorne);
      console.log(licorne.getbasicInfo());
      break;
    case "3":
      console.log("Vous avez choisi de créer un Griffon");
      name = prompt("Entrez le nom de votre Griffon : ");
      size = parseFloat(prompt("Entrez la taille de votre Griffon : "));
      power = prompt("Entrez le pouvoir de votre Griffon : ");

      const griffon = new Griffon(name, size, power);
      listCreatures.push(griffon);
      console.log(griffon.getbasicInfo());
      break;
    default:
      console.log("Choix invalide");
  }
};

const infosCreature = (prompt) => {
  const name = prompt("Entrez le nom de la créature : ");
  if (listCreatures.length === 0) {
    console.log("Aucune créature n'a été créée");
  }

  const creature = listCreatures.find(
    (creature) => creature.getName() === name
  );
  if (creature) {
    console.log(creature.getbasicInfo());
  } else {
    console.log("Créature introuvable");
  }
};

const actionCreature = (prompt) => {
  const name = prompt(
    "Entrez le nom de la créature que vous voulez uttiliser : "
  );
  if (listCreatures.length === 0) {
    console.log("Aucune créature n'a été créée");
  } else {
    const creature = listCreatures.find(
      (creature) => creature.getName() === name
    );
    if (creature) {
      switch (creature.getType()) {
        case "Dragon":
          creature.fireBreath();
          break;
        case "Licorne":
          creature.heal();
          break;
        case "Griffon":
          creature.fly();
          break;
        default:
          console.log("Créature introuvable");
      }
    } else {
      console.log("Créature introuvable");
    }
  }
};

export { creerCreature, afficherCreatures, infosCreature, actionCreature };
