// sort() = method used to sort elements of an array in place
//          sorts elements as strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings

let numbers = [10,1,3,2,4,5,6,7,8,9,11];

//numbers.sort(); //lexicograpgic order
numbers.sort((a, b) => a - b); //natural order
//numbers.sort((a, b) => b - a); //reverse order

console.log(numbers)