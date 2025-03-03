// string methods = allow you to manipulate and work with text (strings)

let username = "Joey";

//get the character at index 0
console.log(username.charAt(0));

//return the first occurence of a character
console.log(username.indexOf("o"));

//get the length of a string
console.log(username.length);

//trim method remove all spaces
username = username.trim();
//turn string to uppercase
username = username.toUpperCase();
//turn string to lowercase
username = username.toLocaleLowerCase();
//repeat the string
username = username.repeat(3);
//determine if the string starts with a specific character
let result = username.startsWith("J");
console.log(result);
//determine if the string ends with a specific character
let result2 = username.endsWith("y");

if(result2){
    console.log("correct")
}
else{
    console.log("wrong")
}
//checks if string includes a specific character
let result3 = username.includes("e")
console.log(result3)
//
console.log(username);
