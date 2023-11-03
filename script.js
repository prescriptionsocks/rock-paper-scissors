const contentWrapper = document.querySelector('.content-wrapper');
const btnWrapper = document.querySelector('.btn-wrapper');
const resultsList = document.querySelector('#results-wrapper');

let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice) {
  // Get computer choice
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log(computerChoice);
  console.log(playerChoice);

  // Pick a round winner
  if (playerChoice === computerChoice) {
    const tieEntry = document.createElement('ul');
    tieEntry.textContent = `You:${playerChoice} | PC:${computerChoice} | It's a tie :O`;
    resultsList.appendChild(tieEntry);
  } else if (
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    const winEntry = document.createElement("li");
    winEntry.textContent = `You:${playerChoice} | PC:${computerChoice} | You Win :D`;
    resultsList.appendChild(winEntry);
    playerScore++;
    console.log(playerScore);
  } else {
    const lossEntry = document.createElement('ul');
    lossEntry.textContent = `You:${playerChoice} | PC:${computerChoice} | You Lose :/`;
    resultsList.appendChild(lossEntry);
    computerScore++;
    console.log(computerScore);
  }

  // Game plays until one reaches 5 points
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      const victoryEntry = document.createElement('li');
      victoryEntry.textContent = "Winner, winner, chicken dinner!";
      resultsList.appendChild(victoryEntry);
    } else {
      const loserEntry = document.createElement('li');
      loserEntry.textContent = "You lose. Maybe try tic tac toe :P";
      resultsList.appendChild(loserEntry);
    }
    computerScore = 0;
    playerScore = 0;
    return;
  }
}

// Play round
const rockBtn = document.querySelector('#rock-btn');
rockBtn.addEventListener('click', () => playRound("rock"));

const paperBtn = document.querySelector('#paper-btn');
paperBtn.addEventListener('click', () => playRound("paper"));

const scissorsBtn = document.querySelector('#scissors-btn');
scissorsBtn.addEventListener('click', () => playRound("scissors"));
