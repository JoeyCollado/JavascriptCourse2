// variable = a container that stores a value
//             behaves as if it were the value it contains

// ways of creating a variable
// 1. declaration = let x;
// 2. assignment  = x = 100;

//types of variables

//numbers
/*
let x;
x = 123312;

console.log(x);

let age = 25;

console.log(age);

let price = 99.11;
console.log(price)

let gpa = 1.11
console.log(gpa)

console.log(`you are ${age} years old`) //constructing a sentence in console log using back ticks
console.log(`your gpa is:  $(gpa)`) //constructing a sentence in console log using back ticks
console.log(typeof gpa) // finds out the type of variable

//strings
let firstName = "joey";
let favoriteFood = "burger"
let email = "@akosijoeypogi31"

console.log(typeof firstName)
console.log(firstName)
console.log(`your name is ${firstName}`)
console.log(`you like ${favoriteFood}`)
console.log(`your email is ${email}`)

//Booleans
let online = true;
let forSale = true;
let isStudent = false;

console.log(typeof online)
console.log(`joey is ${online}`)
console.log(`is this car for sale: ${forSale}`)
console.log(`enrolled: ${isStudent}`)
*/

let fullName = "Joey Collado"
let age = 19;
let student = true;

// displaying varirables on the web document using javascript
document.getElementById("p1").textContent = `your name is ${fullName}`;
document.getElementById("p2").textContent = `you are ${age}`;
document.getElementById("p3").textContent = `enrolled: ${student}`;
//