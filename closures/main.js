// closure = a function defined inside of another function,
//           the inner function has access to the variables
//           and scope of the outer function
//           allow for private variables and state maintenance
//           used frequently in js frameworks: React, Vue, Angular

function outer(){ //outer function

    let message = "Hello"; //declare variable
    
    function inner(){ //inner function, has access to everything within the outer function
        console.log(message); //printing variable message

    }

    inner(); //invoking outer function
}


outer(); //output display