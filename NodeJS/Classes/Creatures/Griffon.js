import MysticalCreature from './MysticalCreature.js';

class Griffon extends MysticalCreature {
    health = Math.floor(Math.random() * (100 - 90) + 90); // Random number between 90 and 100
    strength = Math.floor(Math.random() * (90 - 70) + 70); // Random number between 70 and 90
    speed = Math.floor(Math.random() * (70 - 50) + 50);  
    type = "Griffon";

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

    getType() {
        return this.type;
    }

    //methode
    
    getAllInfo() {
        try{
            console.log(getbasicInfo() + `health: ${this.getHealth()}, strength: ${this.getStrength()}, speed: ${this.getSpeed()}, type: ${this.getType()}`);
        }
        catch(error){
            console.error(error);
        }
        
    }

    fly() {
        console.log("The griffon flies");
    }
}

export default Griffon;