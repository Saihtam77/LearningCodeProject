class MysticalCreature {
  #name;
  #size;
  #power;

  constructor(name, size, power) {
    this.name = name;
    this.size = size;
    this.power = power;
  }

  //getter
  getName() {
    return this.#name;
  }
  getSize() {
    return this.#size;
  }
  getPower() {
    return this.#power;
  }

  //methode
  getbasicInfo() {
    console.log(
      `name: ${this.getName()}, size: ${this.getSize()}, power: ${this.getPower()}`
    );
  }
}

export default MysticalCreature;
