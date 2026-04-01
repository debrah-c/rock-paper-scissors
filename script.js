function getComputerChoice () {
   const choices = ["rock","paper","scissors"];
    // pick a random index 0,1 or 2
    const randomIndex = Math.floor(Math.random() *choices.length);
    return choices[randomIndex];

}

//initializa the score to zero
let humanScore = 0;
let computerScore = 0;

//reference to the 'html button'(THE DOM ELEMENTS)
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById ('paper');
const scissorsBtn = document.getElementById ('scissors');
const resultsDiv = document.getElementById ('results');
const scoreDiv = document.getElementById ('score');

function playRound( playerSelection) {
    const computerSelection = getComputerChoice();

    if (playerSelection === computerSelection){
    resultsDiv.textContent =`Its a tie!`
    } else if (
        playerSelection== "rock" && computerSelection == "scissors"||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper"
        ) {
        humanScore ++;
        resultsDiv.textContent = `You win!`
        } 
        else {
            computerScore++;
            resultsDiv.textContent =`Computer wins!`
            
        }

//Update score after each round.
scoreDiv.textContent =`You: ${humanScore} | computerScore: ${computerScore}`;

checkWinner ();
}

//Checking the winner
function checkWinner () {
    if (humanScore === 5 ){
        return "You win!"
    }
    if (computerScore === 5) {
        return "Computer wins!"
    }
}

//adding an event listener
rockBtn.addEventListener('click', () => playRound ('rock'));
paperBtn.addEventListener('click', () =>playRound ('paper'));
scissorsBtn.addEventListener('click', () =>playRound ('scissors'));
    
   
 
