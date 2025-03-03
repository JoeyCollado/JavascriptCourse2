//Random Number Generator

const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");

const min = 1; //setting minimum number
const max = 6; //setting maxinum number

let randomNum1; //declaring a variable
let randomNum2;
let randomNum3;

myButton.onclick = function(){ 
    randomNum1 = Math.floor(Math.random() * max) + min; //the function
    randomNum2 = Math.floor(Math.random() * max) + min; //the function
    randomNum3 = Math.floor(Math.random() * max) + min; //the function
    
    label1.textContent = randomNum1; //get the text
    label2.textContent = randomNum2; //get the text
    label3.textContent = randomNum3; //get the text

}