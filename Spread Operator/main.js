// spread operator = allows an iterable such as an
// ...               array or string to be expanded
//                   in places where zero or more 
//                   arguments are expected
//                   (unpacks the elements)

let numbers = [1,23,4,45,6,43];
console.log(...numbers);

let username = "Joey Collado";
console.log(...username);

//demonstration and how can it be useful
let numbers2 = [1,2,3,4,5,6,7,8,9];
let maxinum = Math.max(...numbers2); //here we store the result of math.max method to maxinum variable, and we also used spread operators so we can unpack the elements of the array
console.log(maxinum) //prints the max number of the array
//

// example 2
let class1 = ["joey","jake","ranielle"];
let class2 = ["kyle", "france", "jenard"];

class1.push(...class2);

console.log(...class1);