// super = keyword is used in classes to call the constructor or
//         access the properties and method of a parent (superclass)
//         this = this object
//         super = the parent of the object

//using inheritance to create parent class
class Animal{

    constructor(name,age){ //constructor
      this.name = name;
      this.age = age;

    }
     //method
    move(speed){
        console.log(`the ${this.name} is moving at the speed of ${speed}mph`)
     }

}

//subclasses
class Rabbit extends Animal{

    constructor(name,age,runSpeed){ //constructor
      super(name,age); 
      //this.name = name; // by using super keyword we're accessing name and age of the constructor of the parent class which means we can do it with less code coz its now reusable,
      //this.age = age;
      this.runSpeed = runSpeed;
    }
//method
   run(){
      console.log(`this ${this.name} can run`)
      super.move(this.runSpeed) //use the parent class move method
   }
    

}

class Fish extends Animal{

    constructor(name,age,swimSpeed){ //constructor
      super(name,age);
      //this.name = name;
      //this.age = age;
      this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`this ${this.name} can swim`)
        super.move(this.swimSpeed) //use the parent class move method
     }

}


class Hawk extends Animal{

    constructor(name, age, flySpeed){ //constructor
     super(name,age);
     //this.name = name;
     //this.age = age;
     this.flySpeed = flySpeed;
    }

    fly(){
        console.log(`this ${this.name} can fly`)
        super.move(this.flySpeed) //use the parent class move method
     }

}

//creating objects
const rabbit = new Rabbit("jake", 1, 25);
const fish = new Fish("kyle", 2, 12);
const hawk= new Hawk("frace", 1, 25);

//display

rabbit.run();
fish.swim();
hawk.fly();

console.log(rabbit.name)
console.log(rabbit.age)
console.log(rabbit.runSpeed)

console.log(fish.name)
console.log(fish.age)
console.log(fish.swimSpeed)

console.log(hawk.name)
console.log(hawk.age)
console.log(hawk.flySpeed)