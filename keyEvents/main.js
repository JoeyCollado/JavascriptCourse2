// eventListener = Listen for specific events to create interactive web pages
//                             events: keydown, keyup
//                             document.addEventListener(event, callback);


//ex 1
/*
const myBox = document.getElementById("myBox");

document.addEventListener("keydown", event => { //when keyboard key is pressed
    myBox.textContent = "BOX"
    myBox.style.backgroundColor = "tomato";

});

document.addEventListener("keyup", event => { //when keyboard key is release
    myBox.textContent = "box"
    myBox.style.backgroundColor = "lightblue";

});
*/

//ex 2
const myBox = document.getElementById("myBox");
const moveAmount = 100; //the amount specify the rate of pixels the element moves
let x = 0; //horizontal movement
let y = 0; //vertical movement

//key event listener 1 = only change text and style content
document.addEventListener("keydown", event => { //when keyboard key is pressed
    myBox.textContent = "BOX"
    myBox.style.backgroundColor = "tomato";

});

document.addEventListener("keyup", event => { //when keyboard key is release
    myBox.textContent = "box"
    myBox.style.backgroundColor = "lightblue";

});
//
// key event listener 2 = moves the element across the window
document.addEventListener("keydown", event => {
    
    if(event.key.startsWith("Arrow")){ //will only enter the if statement if the key pressed are arrow keys = up, down, left, and right
        
        event.preventDefault(); //when default element goes beyond the screen it will disappear from the view


        switch(event.key){ //key event listeners

            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;

        }

        myBox.style.top = `${y}px`; // take the top property of myBox and set it equal to y coordinate
        myBox.style.left = `${x}px`;
    }
});
