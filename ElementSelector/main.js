// element selectors = Methods used to target and manipulate HTML elements 
//                                     They allow you to select one or multiple HTML elements
//                                     from the DOM (Document Object Model)

//                                      Returns
// 1. document.getElementById()         // ELEMENT OR NULL
// 2. document.getElementsClassName()  // HTML COLLECTION
// 3. document.getElementsByTagName() // HTML COLLECTION
// 4. document.querySelector()       // FIRST ELEMENT OR NULL
// 5. document.querySelectorAll()   // NODELIST = this is static

// ---------- getElementsByClassName() ----------

const fruits = document.getElementsByClassName("fruits");

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
});

// ---------- getElementsByTagName() ----------

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "yellow";
});

Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "lightgreen";
});

// ---------- querySelector() ----------

const element = document.querySelector("li");

element.style.backgroundColor = "yellow";

// ---------- querySelectorAll() ----------

const foods = document.querySelectorAll("li");

foods.forEach(food => {
    food.style.backgroundColor = "yellow"
});
