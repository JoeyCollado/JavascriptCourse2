//declaration of all variables
const display = document.getElementById("display");
let timer = null; //hold the id of set interval for tracking purposes
let startTime = 0;
let elapsedTime = 0;
let isRunning = false; //if the time starts running this will be set to true, and when it stop it will flip to false


//functions
function start(){

    if(!isRunning){ //checks to see if stopwatch isnt running, if not running then start the stopwatch
        startTime = Date.now() - elapsedTime; // date.now - elapsed time gets the start time
        timer = setInterval(update, 10) //call the update function every 10 milseconds
        isRunning = true; //set the boolean value of isrunning to true since its running
    }
}

function stop(){

    if(isRunning){ // if stopwatch is running then set isrunning to false
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset(){

    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;    
    display.textContent = "00:00:00:00"; //update the displat of stopwatch to this when reset button is clicked

}

function update(){ //to update display

    const currentTime = Date.now(); //get current time
    elapsedTime = currentTime - startTime; // current time - start time gives us elapsedTime

    //converting elapsed time into a readable format,        math.floor is rounding up decimals
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60)) //convert miliseconds to hours
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60); //convert miliseconds to minutes
    let seconds = Math.floor(elapsedTime / 1000 % 60); //convert to seconds
    let miliseconds = Math.floor(elapsedTime % 1000 / 10); //to get the first two digits of miliseconds
    //

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    miliseconds = String(miliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`; //changes the display 
} 
