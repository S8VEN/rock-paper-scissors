// create new function getComputerChoice
function getComputerChoice() {
  const computerChoices = ["rock", "paper", "scissor"];
  // Randomly return one of the following string values: “rock”, “paper” or “scissors”.
  return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}
// Create a new function named getHumanChoice.
function getHumanChoice() {
  // Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
  const humanChoices = prompt("Input your choice: ");
  return humanChoices;
}

// write variables to keep track of the players score named humanScore and computerScore in the global scope, Initialize those variables with the value of 0.
let humanScore = 0;
let computerScore = 0;

// function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.
// Create a new function named playRound.
// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
// Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
// Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
// Increment the humanScore or computerScore variable based on the round winner.
// game will play 5 rounds. You will write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.
// Create a new function named playGame.
// Move your playRound function and score variables so that they’re declared inside of the new playGame function
// Play 5 rounds by calling playRound 5 times.



