// eventListener = Listen for specific events to create interactive web pages
//                             events: click, mouseover, mouseout
//                            .addEventListener(event, callback);
//                                          ex (click, changeColor)
// event = is an object that contains information about something that happens
// target = is what we click on

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

/*
//using callback to the function
function changeColor(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH!";
}
//
myBox.addEventListener("click", changeColor);
//
*/

//using arrow function as its more concise
myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH! ";
});
//

//other mouse events
myBox.addEventListener("mouseover", event => { //when you touch the box
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "DONT!";
});
//
myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me";
});

//
//
