// .reduce() = reduce the elements of an array
//             to a single value
//

// ----------- EXAMPLE 1 -----------
const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`); //toFixed add two decimals

function sum(accumulator, element){
    return accumulator + element;
}