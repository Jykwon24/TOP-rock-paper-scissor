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


btnContainer.addEventListener('click', function (e) {
  let targetEvent = e.target.getAttribute('class')
  let currentTargetEvent = e.currentTarget.getAttribute('class')

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
})

function getComputerChoice() {
  const resultArr = ['rock', 'paper', 'scissors']
  return resultArr[getRandom(3)]
}

function getRandom(max) {
  return Math.floor(Math.random() * max)
}

// function playerChoice(input) {
//   if (typeof input !== 'string') {
//     return 'Please enter a valid string'
//   }

//   if (input.toLowerCase() === 'rock' || input.toLowerCase() === 'paper' || input.toLowerCase() === 'scissors') {
//     return input.charAt(0).toUpperCase() + input.toLowerCase().slice(1)

//   }
//   return 'Input must either be rock, paper or scissors'
// }

function playGame(computerSelection, playerSelection) {
  console.log('Computer choice:', computerSelection)
  console.log('Player choice:', playerSelection)

  if (playerSelection === computerSelection) return roundWinner = 'draw'

  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    console.log('Player Wins')
    roundWinner = 'player'
    playerScore++
    console.log('Round Winner:', roundWinner)
  }
  console.log('Computer Wins!')
  computerScore++
  roundWinner = 'computer'
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
}

function updateScore(roundWinner) {
  switch (roundWinner) {
    case 'player':


  }
}

function capitalizeLetter(input) {
  return input.charAt(0).toUpperCase() + input.toLowerCase().slice(1)
}
function displayResult() {
  const stringUpdate = playerSelection.charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1)

  if (stringUpdate === computerSelection) {
    return roundResult.textContent = "It's a tie! Play Again!"
  }

  if ((stringUpdate === 'Rock' && computerSelection === 'Scissors') || (stringUpdate === 'Paper' && computerSelection === 'Rock') || (stringUpdate === 'Scissors' && computerSelection === 'Paper')) {
    console.log('Player Wins')
    console.log('playerScore in function:', playerScore)
    return roundResult.textContent = "You Win!"
  }
  computerScore++
  return console.log('Computer Wins!')

}

function startRound() {
  playGame(getComputerChoice(), playerChoice())

  console.log('Player Score: ', playerScore)
  console.log('Computer Score: ', computerScore)
}

// playRound()
