// .filter() = creates a new array by filtering out elements
//             out elements

let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(oddNums);

function isEven(element){
    return element % 2 === 0; //equal to , using modulus
}

function isOdd(element){
    return element % 2 !== 0; //not equal to 0, using modulus
}