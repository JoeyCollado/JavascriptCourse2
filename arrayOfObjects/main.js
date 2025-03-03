//

const fruits = [{name: "apple", color: "red", calories: 95},   //objects
                {name: "orange", color: "orange", calories: 935},
                {name: "banana", color: "yellow", calories: 915},
                {name: "mangoes", color: "green", calories: 945},
                {name: "grapes", color: "violet", calories: 955}]; //array


//accesing properties of array object
console.log(fruits[0].name);  
console.log(fruits[0].color);  
console.log(fruits[0].calories);  


//add new object
fruits.push({name: "watermelon", color: "darkgreen", calories: 43})

console.log(fruits)

//remove an object
//fruits.pop();

//removes at certain index
//fruits.splice(1,2)

//for each to loop through the array
fruits.forEach(fruit => console.log(fruit.color));

//map method, run each element through a function and return a new array
const fruitNames = fruits.map(fruit => fruit.name);

console.log(fruitNames);

//filter, return new array after using each element and checking the condition
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const calorieFruits = fruits.filter(fruit => fruit.calories > 100);

console.log(calorieFruits);
console.log(yellowFruits);

//reduce, will return a single value
const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);

console.log(maxFruit);


