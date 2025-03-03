
try{
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a dividend: "));

    if(divisor == 0){   //if divisor is equal to 0, throw a new error object
        throw new error("You can't divide by zero!");

    }

    if(isNaN(dividend) || isNaN(divisor)){ //if dividend and divisor is not equal to a number, throw a new error object
        throw new error("Enter number value!");

    }

    const result = dividend / divisor; //store the result of dividend and divisor to this object
    console.log(result); //display result
}

catch(error){ //catch the error
    console.error(Error); //display the error
}