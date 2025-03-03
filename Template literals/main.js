//template literals = delimited with (`)
//                    instead of double single quotes
//                    allows embedded variables and expressions

let userName = "joey";
let items = 3;
let total = 75;

//instead of writing like this
/*
console.log("Hello", userName);
console.log("You have", items, "items in your cart");
console.log("Your total is $", total);
*/
//use template literals and write like this
/*
console.log(`Hello ${userName}`);
console.log(`You have ${items} items in your cart`);
console.log(`Your total is $${total}`);
*/
// if you want to write a one very long string
let text =
`Hello ${userName}<br>
You have ${items} items in your cart<br>
Your total is $${total}<br>`;

//console.log(text); //prints all the value of the variable text
document.getElementById("myLabel").innerHTML = text; //updates our html instead of printing in console
