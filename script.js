function getComputerChoice () {
    choices = ["rock","paper","scissors"];
    // pick a random index 0,1 or 2
    randomIndex = Math.floor(Math.random() *choices.length);
    return choices[randomIndex];

}
console.log (getComputerChoice());
console.log (getComputerChoice());
console.log (getComputerChoice());

function getHumanChoice() {
    // Ask the user for their choice.
    let choices = prompt("Enter rock, paper or scissors");
    return choices;
}
console.log(getHumanChoice());


//initializa the score to zero
let humanScore = 0;
let computerScore = 0;

//reference to the 'html button'(THE DOM ELEMENTS)
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById ('paper');
const scissorsBtn = document.getElementById ('scissors');
const resultsDiv = document.getElementById ('results');
const scoreDiv = document.getElementById ('score');

function playRound( playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
    resultsDiv.textContent =`Its a tie!`
    } else if (
        playerSelection== "Rock" && computerSelection == "Scissors"||
        playerSelection == "Paper" && computerSelection == "Rock" ||
        playerSelection == "Scissors" && computerSelection == "Paper"
        ) {
        humanScore ++;
        resultsDiv.textContent = `You win!`
        } 
        else {
            computerScore++;
            resultsDiv.textContent =`Computer wins!`
            
        }
    
    }

//update score display
scoreDiv.textContent =`You: {humanScore} | computerScore: {computerScore}`
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
    
   
 
