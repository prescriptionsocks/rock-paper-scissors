const contentWrapper = document.querySelector('.content-wrapper');
const btnWrapper = document.querySelector('.btn-wrapper');
const resultsList = document.querySelector('#results-wrapper');
const result = document.querySelector('.result');
const winnerWrapper = document.querySelector('.winner-wrapper');
const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score'); 

let playerScore = 0;
let computerScore = 0;

//update score displays
function updateScoreDisplay(){
  playerScoreDisplay.textContent = `Player: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer: ${computerScore}`;
}

function playRound(playerChoice) {

  // Get computer choice
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
  // Pick a round winner
  if (playerChoice === computerChoice) {
    result.textContent = `${playerChoice} ties with ${computerChoice} :0`;
  } else if (
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result.textContent = `${playerChoice} beats ${computerChoice} :D`;
    playerScore++;
    console.log(playerScore);
  } else {
    result.textContent = `${playerChoice} loses to ${computerChoice} :/`;
    computerScore++;
    console.log(computerScore);
  }

  //lower winner wrapper
  function lowerWinnerWrapper () {
    winnerWrapper.setAttribute('style', 'transform:translateY(100%); duration:0.5s; ease-out;')
  }

  // GWinner announced when one reaches 5 points
   if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      const victoryEntry = document.createElement('p');
      victoryEntry.textContent = "Winner, winner, chicken dinner!";
      winnerWrapper.appendChild(victoryEntry);
      lowerWinnerWrapper();
    } else {
      const loserEntry = document.createElement('p');
      loserEntry.textContent = "You lose, maybe try tic tac toe :P";
      winnerWrapper.appendChild(loserEntry);
      lowerWinnerWrapper();
    }
  }

    updateScoreDisplay();
  
}

// Play round
const rockBtn = document.querySelector('#rock-btn');
rockBtn.addEventListener('click', () => playRound("rock"));

const paperBtn = document.querySelector('#paper-btn');
paperBtn.addEventListener('click', () => playRound("paper"));

const scissorsBtn = document.querySelector('#scissors-btn');
scissorsBtn.addEventListener('click', () => playRound("scissors"));

//Restart game
function restartGame() {
  computerScore = 0;
  playerScore = 0;
  result.textContent = "First to 5 wins";
  updateScoreDisplay();
  winnerWrapper.removeChild(winnerWrapper.lastChild);
  winnerWrapper.setAttribute('style','transform:translateY(-100%); duration:0.5s; ease-out;');
}

const restartBtn = document.querySelector('.restart-btn');
restartBtn.addEventListener('click', () => restartGame());
