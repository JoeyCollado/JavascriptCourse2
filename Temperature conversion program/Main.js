//the logic behind the program
/*
let temp = 32;
temp = toFareheit(temp); // or temp = toCelcius(temp)
console.log(temp);

function toCelcius(temp){
    return(temp - 32) * (5/9); //the formula to convert celcius
}

function toFarenheit(temp){
    return temp * 9 / 5 + 32;  //the formula to convert farenheit
}
*/
// creating the program
document.getElementById("submitButton").onclick = function(){

    let temp;

    if(document.getElementById("cButton").checked){ //checks if the celcius button is checked or not, if this button is checked do the following
        temp = document.getElementById("textBox").value; //when we accept user input from the textbox, its of string data type
        temp = Number(temp); //reassing temp to number
        temp = toCelcius(temp); //reassing temp which is newly converted number to celcius
        document.getElementById("tempLabel").innerHTML = temp + "°C";  //after its converted the label of the html will change
    }
    else if(document.getElementById("fButton").checked){ //checks if the farenheit button is checked or not, if this button is checked do the following
        temp = document.getElementById("textBox").value; //when we accept user input from the textbox, its of string data type
        temp = Number(temp); //reassing temp to number
        temp = toFarenheit(temp); //reassing temp which is newly converted number to farenheit
        document.getElementById("tempLabel").innerHTML = temp + "°F";  //after its converted the label of the html will change
    }
    else{
        document.getElementById("tempLabel").innerHTML = "Select a unit";  //changes the html of temp label
    }
}

function toCelcius(temp){ //this function is the one we will use for the program
    return(temp - 32) * (5/9); //the formula to convert to celcius
}

function toFarenheit(temp){
    return temp * 9 / 5 + 32;  //the formula to convert to farenheit
}