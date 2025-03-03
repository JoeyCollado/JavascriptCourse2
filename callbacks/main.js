// callback = function pass as an argument to another function
//            it ensures a function is not going to run before a task is completed

let total = sum(2, 3);
displayDOM(total);  //displays the total result to the console

function sum(x, y){
    let result = x + y;
    return result
}

function displayConsole(output){
    console.log(output);
}
function displayDOM(output){
    document.getElementById("myLabel").innerHTML = output;
 
}