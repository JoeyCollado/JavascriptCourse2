// object = A collection of related properties and/or methods
//          Can represent real world objects (people, products, places)
//          object = {key:value,
//                   function()}
// methods = are just functions that belongs to an object
// object = representation of real objects person etc
// objects need different names
// this is an introduction to object oriented programming


const person1 = { //object
    //properties / attributes
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    //
    //declaring functions
    sayHello: function(){console.log("Hi! I am spongebob!")},
    eat: function(){console.log("I am eating a hamburger")},
    //
}

const person2 = { //object
    //properties / attributes
    firstName: "jake",
    lastName: "laurence",
    age: 34,
    isEmployed: true,
    //
    //declaring functions
    sayHello: function(){console.log("Hi! I am jake!")},
    eat: function(){console.log("I am eating a glizzies")},
    //
}

//accessing the properties of an object
console.log(person1.firstName);
console.log(person2.firstName);
//invoking object methods/functions
person1.sayHello();
person1.eat();
person2.sayHello();
person2.eat();