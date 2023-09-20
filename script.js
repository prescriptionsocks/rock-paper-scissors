
let computerChoice;
let playerChoice;
let tallyCount;

// One round
function playRound() {
  // Function lets computer pick random choice
  function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  }

  let computerChoice = getComputerChoice();

  // Get the player's choice
  function getPlayerChoice() {
    return prompt("Pick either Rock, Paper, or Scissors").toLowerCase();
  }

  let playerChoice = getPlayerChoice();

 //validate the player's choice
  while (
    playerChoice != "rock" &&
    playerChoice != "paper" &&
    playerChoice != "scissors"
  ) {
    alert("Invalid choice, try again");
    playerChoice = getPlayerChoice();
  }


//Return results of a single round
    if (playerChoice == computerChoice) {
    alert("It's a tie :P");
    return "tie";
  } else if (
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "scissors" && computerChoice == "paper")
  ) {
    alert("You won :D");
    return "win";
  } else {
    alert("You lost...to a computer :/");
    return "loss";
  }
}

//Function loops the game 5 times
function game() {
  //   
  let tallyCount = 0;
  for (let i = 0; i < 5; i++) {
    let score = playRound();
    console.log(score);
    


    // tallyCount keeps track of wins,losses and draws 
    if (score == "win") {
      tallyCount++;
    } else if (score == "loss") {
      tallyCount--;
    }
  }

  console.log(tallyCount);

  // Use total tally count to return overall winner
  if (tallyCount < 0) {
    alert("You lost bruh");
  } else if (tallyCount > 0) {
    alert("You won!");
  } else {
    alert("It's a tie!");
  }
}

game();


 