

const display = document.getElementById("display");

function appendToDisplay(input){

    display.value += input; //access the display value property and set input to +

}

function clearDisplay(){ //access the display value property and set input to " " to clear

    display.value = "";

}

function calculate(){

    try{ //catch any potential error, a this code is dangerous and prone to errors
        display.value = eval(display.value); //eval function takes mathematical expression, (built in calculator)
    }
    catch(error){ //catch error and display
        display.value = "Error"
    }
    

}