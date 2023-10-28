/*
let computerChoice;
let playerChoice;
let tallyCount; */

//remove all padding and margind
const allElements  = document.querySelectorAll('*');
allElements.forEach(element => element.setAttribute('style','margin:60px; padding:0px;'));

//generate player ui
const bodyElement = document.querySelector('body');
const btnWrapper = document.createElement('div');
btnWrapper.setAttribute('id', 'btn-wrapper');
bodyElement.appendChild(btnWrapper);
bodyElement.setAttribute('style', 'display:flex; flex-direction:column; gap:16px; justify-content:center; align-items: center; width:100%; height:100vh')

//gnerate buttons
const rockBtn = document.createElement('button');
rockBtn.setAttribute('id', 'rock-btn');
rockBtn.setAttribute('value', 'rock');
rockBtn.textContent ='Rock';
btnWrapper.appendChild(rockBtn);
rockBtn.setAttribute('style', 'padding: 8px 16px; margin-right:16px');

const paperBtn = document.createElement('button');
paperBtn.setAttribute('id', 'paper-btn')
paperBtn.setAttribute('value', 'paper');
paperBtn.textContent ='Paper';
btnWrapper.appendChild(paperBtn);
paperBtn.setAttribute('style', 'padding: 8px 16px; margin-right:16px');

const scissorsBtn = document.createElement('button');
scissorsBtn.setAttribute('id', 'scissors-btn')
scissorsBtn.setAttribute('value', 'scissors');
scissorsBtn.textContent ='Scissors';
btnWrapper.appendChild(scissorsBtn);
scissorsBtn.setAttribute('style', 'padding: 8px 16px; margin-right:16px');

//computer choices ui
const computerChoiceWrapper = document.createElement('div');
computerChoiceWrapper.textContent="temporary text";
computerChoiceWrapper.setAttribute('style','display:flex; flex-direction:row; gap:16px;')
bodyElement.appendChild(computerChoiceWrapper);
const computerChoiceValue = document.createElement('p');
computerChoiceValue.textContent='value';
computerChoiceWrapper.appendChild(computerChoiceValue);

//round results wrapper
const resultsWrapper = document.createElement('div');

//play one round
const playRound = function (){
  //pick computer choice
  const getComputerChoice = ()=>{
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = math.floor(math)
  }
  //pick player's choice
  //validate player's choice
  //return winner

}



/*
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

*/
 