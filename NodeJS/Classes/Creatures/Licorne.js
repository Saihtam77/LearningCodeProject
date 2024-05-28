import MysticalCreature from './MysticalCreature.js';


class Licorne extends MysticalCreature{
    health = Math.floor(Math.random() * (100 - 90) + 90); // Random number between 90 and 100
    strength = Math.floor(Math.random() * (90 - 70) + 70); // Random number between 70 and 90
    speed = Math.floor(Math.random() * (70 - 50) + 50); 
    toughness = Math.floor(Math.random() * (100 - 80) + 80);
    corneSize = Math.floor(Math.random() * 20);
    type = "Licorne";

    constructor(name, size, power) {
        super(name, size, power);
    }

    // Getters
    getName() {
        return this.name;
    }

    getSize() {
        return this.size;
    }

    getPower() {
        return this.power;
    }

    getHealth() {
        return this.health;
    }

    getStrength() {
        return this.strength;
    }

    getSpeed() {
        return this.speed;
    }

    getToughness() {
        return this.toughness;
    }

    getCorneSize() {
        return this.corneSize;
    }

    getType() {
        return this.type;
    }

    //methode

    getAllInfo() {
        try{
            console.log(getbasicInfo() + `health: ${this.getHealth()}, strength: ${this.getStrength()}, speed: ${this.getSpeed()}, toughness: ${this.getToughness()}, corneSize: ${this.getCorneSize()}, type: ${this.getType()}`);
        }
        catch(error){
            console.error(error);
        }
    }

    heal() {
        console.log("The Licorne heals itself");
    }
}

export default Licorne;