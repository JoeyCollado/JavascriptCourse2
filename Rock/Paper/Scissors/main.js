//


const choices = ["rock", "paper", "scissor"]; //rock is index 0, paper is 1, scissor is 2

const playerDisplay = document.getElementById("playerDisplay");
const ComputerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function Play(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)]; //computer choice will be a random index between 0 and 2 

    let result = "";

    if (playerChoice === computerChoice){
        result = "IT'S A TIE";
    }
    else{

        switch(playerChoice){

            case "rock":                              //if you pick rock and computer chose scissor return you win otherwise return you lost
                result = (computerChoice === "scissor") ? "YOU WIN!" : "YOU LOST!";
                break;
            
            case "paper":                             
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOST!";
                break;

            case "scissor":                             
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOST!";
                break;

        }
    }

        playerDisplay.textContent = `Player: ${playerChoice}`; //display what we pick, r/p/s
        ComputerDisplay.textContent =  `Computer: ${computerChoice}`; //display what computer pick
        resultDisplay.textContent = result; //display result

        resultDisplay.classList.remove("greenText", "redText");

        switch(result){
            case "YOU WIN!":
                resultDisplay.classList.add("greenText");
                playerScore++;
                playerScoreDisplay.textContent = playerScore;
                break;
            case "YOU LOST!":
                resultDisplay.classList.add("redText");
                computerScore++;
                computerScoreDisplay.textContent = computerScore;
                break;
        }
    }

       

