import PromptSync from "prompt-sync";
const prompt = PromptSync();

class Personne {
  #name;
  #age;
  #gender;

  constructor(name, age, gender) {
    this.#name = name;
    this.#age = age;
    this.#gender = gender;
  }

  //getters
  getName() {
    return this.#name;
  }

  getAge() {
    return this.#age;
  }

  getGender() {
    return this.#gender;
  }

  //setters

  setName(name) {
    this.#name = name;
  }

  setAge(age) {
    this.#age = age;
  }

  setGender(gender) {
    this.#gender = gender;
  }

  //methodes
  displayInfo() {
    console.log(`Name : ${this.getName()} | Age : ${this.getAge()}, Gender : ${this.getGender()}`);
  }
}

export default Personne;
