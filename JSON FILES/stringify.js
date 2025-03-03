// JSON = (JavaScript Object Notation) data-interchange format 
//                Used for exchanging data between a server and a web application
//                JSON files {key:value} OR [value1, value2, value3]

// JSON.stringify() = converts a JS object to a JSON string.
// JSON.parse() = converts a JSON string to a JS object

//
const names = ["joey","jake","jason","james"];

const person = [{
    "name":"joey",
    "age": 19,
    "isEmployed": true,
    "hobbies": ["boxing","gym","gaming"] 
}]

const people = [[{
    "name":"joey",
    "age": 19,
    "isEmployed": true
    
},
{
    "name":"jake",
    "age": 29,
    "isEmployed": true
    
},
{
    "name":"james",
    "age": 39,
    "isEmployed": false
    
},
{
    "name":"john",
    "age": 49,
    "isEmployed": false
    
}]]

//
const jsonString =  JSON.stringify(names);
const jsonString2 =  JSON.stringify(person);
const jsonString3 = JSON.stringify(people);

console.log(names);
console.log(person);
console.log(people);