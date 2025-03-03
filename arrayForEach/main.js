//array.forEach() = executes a provided call function
//                  once for each array element

let students = ["joey", "jake", "kyle"]; //creating an array

students.forEach(capitalize); //callback to the function
students.forEach(print); //callback to the function

function capitalize(element,index,array){ //creating a function, note the three arguments is already implicitly used no need to explicitly call it
    array[index] = element[0].toUpperCase() + element.substring(1); //making the specified index of all array string uppercase

}

function print(element){ //creating another function
    console.log(element); 
}