const answer = Math.floor(Math.random() * 10 + 1) //the answer is generated between 1 - 10
let guesses = 0;

document.getElementById("submitButton").onclick = function(){

    let guess = document.getElementById("guessField").value //get the value from the textbox
    guesses+=1; //increment guesses by 1

    if(guess == answer){ //if guess is equal to the answer shows an alert message
        alert(`${answer} is the #. It took  you ${guesses} guesses`);   
    }
    else if(guess < answer){ // if guess is less than this shows
        alert(`Too Small!`);
    }
    else{
        alert(`Too Large!`) // if guess is greater this shows
    }
}