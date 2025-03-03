// JSON = (JavaScript Object Notation) data-interchange format 
//                Used for exchanging data between a server and a web application
//                JSON files {key:value} OR [value1, value2, value3]

// JSON.stringify() = converts a JS object to a JSON string.
// JSON.parse() = converts a JSON string to a JS object

//
const Jsonnames = ["joey","jake","jason","james"];

const Jsonperson = [{"name":"joey","age": 19,"isEmployed": true,"hobbies": ["boxing","gym","gaming"]}]

const Jsonpeople = [[{"name":"joey","age": 19,"isEmployed": true},{"name":"jake","age": 29,"isEmployed": true},{"name":"james","age": 39,"isEmployed": false},{"name":"john","age": 49,"isEmployed": false}]]

//
const parseData =  JSON.parse(Jsonnames);
const parseData2 =  JSON.parse(Jsonperson);
const parseData3 =  JSON.parse(Jsonpeople);

console.log(Jsonnames);
console.log(Jsonperson);
console.log(Jsonpeople);