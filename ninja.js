
class Ninja{
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(`${this.constructor.name}'s name is ${this.name}`)
    }
    showStats(){
        console.log(`Name: ${this.name}\nStrength: ${this.strength}\nSpeed: ${this.speed}\nHealth: ${this.health}`)
    }
    drinkSake(){
        this.health += 10;
        console.log(`${this.constructor.name}'s health increased - ${this.health}`);
    }
}
const ninja1 = new Ninja("Hyabusa", 3);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
