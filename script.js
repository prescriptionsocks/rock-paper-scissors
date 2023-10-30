/*
let computerChoice;
let playerChoice;
let tallyCount; */

//remove all padding and margind
const allElements  = document.querySelectorAll('*');
allElements.forEach(element => element.setAttribute('style','margin:0px; padding:0px;'));

const allParagraphs  = document.querySelectorAll('p');
allParagraphs.forEach(element => element.setAttribute('style','margin:0px; padding:0px;'));

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
const resultWrapper = document.createElement('div');
resultWrapper.setAttribute('id', 'resultWrapper')
resultWrapper.setAttribute('style','display:flex; flex-direction:column; gap:16px; text-align:center;')
bodyElement.appendChild(resultWrapper);

let playerScore = 0;
let computerScore = 0;

//play one round
function playRound (playerChoice){ 

console.log(playerChoice);
    //pick computer choice
    function getComputerChoice () {
        const choices = ["rock", "paper", "scissors"];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        return(computerChoice);
    };
    const computerChoice = getComputerChoice();
    console.log(computerChoice);
    console.log(typeof computerChoice);

    //return round winner
    if(playerChoice === computerChoice) {
      const tieResult = document.createElement('p');
      tieResult.textContent = "It's a tie :P";
      resultWrapper.appendChild(tieResult);
      console.log("its a tie");
      console.log(playerScore);
      console.log(computerScore);
      //checkWinner();
      playerScore;
    } 

    
    
    if ((playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "scissors" && computerChoice == "paper")) {
            const playerWon = document.createElement('p');
            playerWon.textContent = "You won :D"
            resultWrapper.appendChild(playerWon);
            console.log("you won :D");
            console.log(playerScore +=1);
            //checkWinner();
            playerScore +=1;
               }
               
    else {
      const computerWon = document.createElement('p');
            computerWon.textContent = "You lost to a pc :/"
            resultWrapper.appendChild(computerWon);
            console.log('you lost')
            console.log(computerScore +=1);
            //checkWinner();            
            computerScore +=1;

    };  
    checkWinner();  
    
  }
  
//picking player choice;
rockBtn.addEventListener('click', () => playRound("rock"));
paperBtn.addEventListener('click', () => playRound("paper"));
scissorsBtn.addEventListener('click', () => playRound("scissors"));

  //return overall winner
  function checkWinner () {if (computerScore === 3 || playerScore === 3) {
    if(playerScore > computerScore) {
      const winner = document.createElement('p');
            winner.textContent = "You won the game :D"
            resultWrapper.appendChild(winner);
            console.log("you woooooooon");
            //return playerScore =-1;
            //return computerScore =-1;
    } else {
      const loser = document.createElement('p');
            loser.textContent = "You lost the game :("
            resultWrapper.appendChild(loser);
            console.log("you looooost");
            //return playerScore =-1;
            //return computerScore =-1;
    }
  }

}