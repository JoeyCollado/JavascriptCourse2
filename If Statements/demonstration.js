// if statements = if a condition is true, execute some code
//                 if not it will do something else

//1st example
/*
let age = 13;

if(age >= 18){
    console.log("you old enough");  
}
else{
    console.log("you a kid")
}
*/

//2nd example
/*
let isStudent = false;

if(isStudent){
    console.log("you a student")
}
else{
    console.log("you aint student")
}
*/
//3rd example nested
/*
let age = 25;
let hasLicense = false;

if(age >= 16){
    console.log("you old enough to drive");

    //nested
    if(hasLicense){
        console.log("you have a license")
    }
    else{
        console.log("you dont have ur license")
    }
}
else{
    console.log("you must be 16 above");
}
*/
//4th example if else statement
/*
let age = -1;

if(age >= 100){
    console.log("you super old");
}
else if(age == -1){
    console.log("what the fuck")
}
else if(age <= 0){ //additional condition before else
    console.log("you aint even born yet");
}
else if(age >= 18){
    console.log("you old enough for this site");
}
else{
    console.log("you must be 18 above to enter site");
}
*/