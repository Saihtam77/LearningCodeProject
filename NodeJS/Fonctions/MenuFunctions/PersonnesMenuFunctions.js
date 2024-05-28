import Personne from "./../../Classes/Personnes/Personne.js";

let charatherList = [];

const createPerson = (prompt) => {
  let name = prompt("Enter the name of the charather :");
  let age = prompt("Enter the age of the charather :");
  let gender = prompt("Enter the gender of the charather :");

  let person = new Personne(name, age, gender);

  charatherList.push(person);

  console.log(`Charather ${name} created successfully !`);
};

const displayAllPerson = () => {
  if (charatherList.length === 0) {
    console.log("No charather to display !");
    return;
  } else {
    charatherList.forEach((person) => {
      person.displayInfo();
    });
  }
};

const displayPerson = (prompt) => {
  if (charatherList.length === 0) {
    console.log("No charather to display !");
  } else {
    let name = prompt("Enter the name of the charather to display :");
    
    charatherList.forEach((person) => {
      person.getName() === name
        ? person.displayInfo()
        : console.log("Charather not found !");
    });
  }
};

const modifyPerson = (prompt) => {
  if (charatherList.length === 0) {
    console.log("No charather to modify !");
  } else {
    let name = prompt("Enter the name of the charather to modify :");
    charatherList.forEach((person) => {
    });
   
  }
};

const deletePerson = (prompt) => {
  if (charatherList.length === 0) {
    console.log("No charather to delete !");
  } else {
    let name = prompt("Enter the name of the charather to delete :");
    charatherList.forEach((person) => {
      if (person.getName() === name) {
        charatherList = charatherList.filter((person) => person.getName() !== name);
        console.log(`Charather ${name} deleted successfully !`);
      } else {
        console.log("Charather not found !");
      }
    });
  }
};

export { createPerson, displayAllPerson, displayPerson, modifyPerson, deletePerson };
