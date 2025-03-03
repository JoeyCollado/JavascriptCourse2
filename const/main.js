//const = a variable that can't be changed, adds security to the code

//program that calculates the circumference of a circle

// declaring our variables
const pi = 3.14159; // will no longer be changed even when re assigning the variable
let radius;
let circumference;
//

radius = window.prompt("enter the radius of the circle"); //shows the window prompt on the web
radius = Number(radius) //convert the radius into a number

circumference = 2 * pi * radius; //the formula of circumference
//              2 * 3.14159 * radius

console.log("the circumference is:", circumference);