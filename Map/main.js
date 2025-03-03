// .map() accepts a callback and applies that function
//        to each element of an array, then returns a new array

// ------------ EXAMPLE 1 ------------
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(square);
const cubed = numbers.map(cube);

console.log(cubed);

function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}