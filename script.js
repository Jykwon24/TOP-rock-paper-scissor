// Create function for computer choice
// The function will have 3 outcomes rock paper or scissor
// possibly randomize the output of the function btwn the 3 items
// Create logic what will take the player input
// Return that input, no matter the case user uses
//
let playerScore = 0
let computerScore = 0
let roundWinner = ''


console.log('playerScore:', playerScore)

const mainBody = document.querySelector('.container')
const btnContainer = document.querySelector('.button-container')

const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const roundResult = document.querySelector('.round-result')
const playerScore2 = document.querySelector('.player-score')
const computerScore2 = document.querySelector('.computer-score')


btnContainer.addEventListener('click', handleClick)

function getComputerChoice() {
  const resultArr = ['rock', 'paper', 'scissors']
  return resultArr[getRandom(3)]
}

function getRandom(max) {
  return Math.floor(Math.random() * max)
}

function playGame(computerSelection, playerSelection) {
  console.log('Computer choice:', computerSelection)
  console.log('Player choice:', playerSelection)

  if (playerSelection === computerSelection) {
    roundWinner = 'draw'
    updateMessage(playerSelection, computerSelection, roundWinner)
    return updateScore()
  }
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    console.log('Player Wins')
    roundWinner = 'player'
    playerScore++
    updateMessage(playerSelection, computerSelection, roundWinner)
    return updateScore()
  }
  console.log('Computer Wins!')
  computerScore++
  roundWinner = 'computer'
  updateMessage(playerSelection, computerSelection, roundWinner)
  updateScore()
}



function updateMessage(playerChoice, computerChoice, roundWinner) {
  switch (roundWinner) {
    case 'player':
      roundResult.textContent = `${capitalizeLetter(playerChoice)} beats ${capitalizeLetter(computerChoice)}, you win!`
      break;
    case 'computer':
      roundResult.textContent = `${capitalizeLetter(computerChoice)} beats ${capitalizeLetter(playerChoice)}, you lost this one!`
      break;
    case 'draw':
      roundResult.textContent = "It's a draw, play again!"
      break;
  }
  console.log('player choice in update message:', playerChoice)
  console.log('computer choice in update message:', computerChoice)
  console.log('round winner in update message:', roundWinner)
}

function updateScore() {
  switch (roundWinner) {
    case 'player':
      playerScore2.textContent = `${playerScore}`
      break;
    case 'computer':
      computerScore2.textContent = `${computerScore}`
      break;
  }
}

function capitalizeLetter(input) {
  return input.charAt(0).toUpperCase() + input.toLowerCase().slice(1)
}

function handleClick(e) {
  let targetEvent = e.target.getAttribute('class')
  let currentTargetEvent = e.currentTarget.getAttribute('class')
  // console.log(targetEvent)

  switch (targetEvent) {
    case 'rock':
      console.log(`${targetEvent} was clicked`)
      playGame(getComputerChoice(), targetEvent)
      break;
    case 'paper':
      console.log(`${targetEvent} was clicked`)
      playGame(getComputerChoice(), targetEvent)
      break;
    case 'scissors':
      console.log(`${targetEvent} was clicked`)
      playGame(getComputerChoice(), targetEvent)
      break;
  }

  console.log('Player Score:', playerScore)
  console.log('Computer Score:', computerScore)
  console.log('Round Winner:', roundWinner)

}
