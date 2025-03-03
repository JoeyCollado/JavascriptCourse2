// variable scope = where variable is accesible

// let = variables are limited to block scope{}
// var = variables are limited to a function (){}

// global variable = is declared outside any function
// (if global, var will CHANGE browser's window properties)

let name = "joey"; //global variable since its declared outside of any function

// var 
/*
doSomething();

function doSomething(){
    for(var i = 1; i <= 3; i+=1){ //var
        console.log(i);
    }
}
*/

//let
/*
for(let i = 1; i <= 3; i+=1){ //let 
    console.log(i);
}
*/

