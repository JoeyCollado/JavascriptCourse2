// Inheritance = allows a new class to inherit properties and methods
//               from an existing class (parent -> child) parent child relationship
//               helps with code reusability\

class Animal{ //parent class
    //properties
    alive = true;

    //methods
    eat(){
        console.log(`This ${this.name} is eating`);
    }

    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

//children classes
class Rabbit extends Animal{ //inherits from parent class
    name = "rabbit"; //property

    //unique method that a specific child class can only inherit
    run(){
        console.log(`this ${this.name} is running`)
    }
}

class Fish extends Animal{
    name =  "fish";

    //unique method that a specific child class can only inherit
    swim(){
        console.log(`this ${this.name} is swimming`)
    }
}

class Hawk extends Animal{
    name =  "hawk";

    //unique method that a specific child class can only inherit
    fly(){
        console.log(`this ${this.name} is flying`)
    }
}

// creating objects
const rabbit = new Rabbit();

const fish = new Fish();

const hawk = new Hawk();

// invoking methods
console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();

console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();

console.log(hawk.alive);
hawk.eat();
hawk.sleep();
hawk.fly();
