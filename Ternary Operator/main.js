//ternary operator = a shortcut to if{} and else{} statements
//                   helps to assign a variable based on a condition
//                   condition ? codeIfTrue : codeIfFalse;
// shortcut to if else statements
/*
let age = 21;
let message = age >= 18 ? "you are adult" : "you are young";
console.log(message);
*/
// 2nd example
/*
let time = 16;
let greeting = time < 12 ? "good morning" : "good afternoon";
console.log(greeting);
*/
// 3rd example
/*
let isStudent = true;
let message = isStudent ? "you are a student" : "you are not a student";
console.log(message);
*/
//4th example
// if purchase amount is greater than 100 you get 10% discount if not you get 0% discount 
let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`your total is $${purchaseAmount - purchaseAmount  * (discount/100)}`);