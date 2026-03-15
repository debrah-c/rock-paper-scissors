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



function playGame(){
    //Initialize the score to 0
var humanScore = 0;
var computerScore = 0;

function playRound( humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
    return "It is a tie!"
    } else if (
        humanChoice == "Rock" && computerChoice == "Scissors"||
        humanChoice == "Paper" && computerChoice == "Rock" ||
        humanChoice == "Scissors" && computerChoice == "Paper"
        ){ 
            humanScore =+ 1; //human wins 
            return "You Win!"+humanChoice +" beats "+computerChoice+""
           } else {
                computerScore =+ 1;
            return "You lose!"+computerChoice+" beats "+humanChoice+""
           }

}
//Play 5 rounds
for (let i = 1; i >=5; i++)
        human= getHumanChoice();      // Ask user
        computer = getComputerChoice(); // Random computer choice
        console.log("Round " + i + ": " + playRound(human, computer));
        console.log("Score -> You: " + humanScore + " Computer: " + computerScore);

    
}    
