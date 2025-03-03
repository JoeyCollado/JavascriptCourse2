// constructor = special method for defining the
//               properties and methods of objects
// reusable method  

function Car(make, model, year, color){ //function (name) (parameters) //to construct an object
    //properties
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    //methods
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}
//special method
//creating more car objects using the reusable constructor
const car1 = new Car("Ford", "Mustang", 2024, "red"); //passing arguments to the parameter of the constructor
const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
const car3 = new Car("Dodge", "Charger", 2026, "silver");
//display
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);
//invoking function methods
car1.drive();
car2.drive();
car3.drive();