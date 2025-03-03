//2d arrays = an array of arrays
//2 dimensional arrays

//arrays
let  fruits = ["banana", "apples", "oranges"]; //first array
let vegetables = ["carrots", "onions", "potatoes"];
let meats = ["chicken","pork","beef"];

let groceryList = [fruits, vegetables, meats]; //2d array

groceryList[0][0] = "mangoes";  //first index represents rows and the second is columns    
                                 //changing an element of a array using index
                                
//to iterate over the elements of 2d arrays use nested loops

for(let list of groceryList){ //outer loop will iterate the 2d array
    for(let food of list){    //unner loop will iterate the arrays
        console.log(food)
    }
}