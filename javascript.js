// create getComputerChoice
function getComputerChoice() {
  const computerChoice = ["rock", "paper", "scissor"];
  // Randomly return “rock”, “paper” or “scissors”.
  return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}
// Create getHumanChoice.
function getHumanChoice() {
  // return one of the valid choices depending on what the user inputs.
  let humanChoice = prompt("Input your choice (rock, paper, scissor): ");
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissor") {
    alert("Invalid input");
    humanChoice = prompt("Input your choice (rock, paper, scissor): ");
  }
  return humanChoice;
}

// write variables to keep track of the players score named humanScore and computerScore in the global scope, Initialize those variables with the value of 0.
let humanScore = 0;
let computerScore = 0;

// write logic to play single round name playRound
// define two parameters for playRound; humanChoice and computerChoice as arguments
function playRound(humanChoice, computerChoice) {
  // Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
  // Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
  // Increment the humanScore or computerScore variable based on the round winner.

  if (humanChoice == "rock" && computerChoice == "scissor") {
    //rock beat scissor
    console.log("You win! Rock beats Scissor");
    humanScore++;
  } else if (humanChoice == "scissor" && computerChoice == "paper") {
    //scissor beat paper
    console.log("You win! Scissor beats Paper");
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    //paper beat rock
    console.log("You win! Paper beats Rock");
    humanScore++;
  } else if (humanChoice == computerChoice) {
    //draw if choice is identical
    console.log("It is a draw!");
  } else {
    console.log("You lose! " + computerChoice + " beats " + humanChoice);
    computerScore++;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

