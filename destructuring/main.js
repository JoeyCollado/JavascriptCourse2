// destructuring = extract values from arrays and objects
//                 then assign them to variables in a convenient way
//                 [] = to perform array destructuring
//                 {} = to perform object destructuring
//                 5 examples

// Example 1
// swap the value of two variable
/*
let a = 1;
let b = 2;
//left we use destructuring, right we create an array
[a,b] = [b,a];

console.log(a);
console.log(b);
*/

// Example 2
// swap 2 elements in the array
/*
const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];//swap red with white
*/

// Example 3
// assign array elements to variables
/*
const colors = ["red", "green", "blue", "black", "white"];

const [firstColor,secondColor,thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);
*/

// Example 4
// extract values from objects
/*
const person1 = {
    firstName: "joey",
    lastName: "collado",
    age: 12,
    job: "god",
}

const person2 = {
    firstName: "jake",
    lastName: "acang",
    age: 122,
}
*/
/*
const {firstName,lastName,age,job} = person1

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);
*/
/*
const {firstName,lastName,age, job = "unemployed"} = person2

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);
*/

// Example 5
// ddestructure in function parameters

function displayPerson({firstName, lastName, age, job}){ //passing person1 and destructuring it immediately
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);

}

const person1 = {
    firstName: "joey",
    lastName: "collado",
    age: 12,
    job: "god",
}

const person2 = {
    firstName: "jake",
    lastName: "acang",
    age: 122,
}

//invoking function
displayPerson(person1); //passing person 1