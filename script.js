// Create function for computer choice
// The function will have 3 outcomes rock paper or scissor
// possibly randomize the output of the function btwn the 3 items
// Create logic what will take the player input
// Return that input, no matter the case user uses
//
const mainBody = document.querySelector('.container')
// console.log(mainBody)

const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')

rockButton.addEventListener('click', function (e) {
  const targetEvent = e.target.getAttribute('class')
  const currentTargetEvent = e.target.getAttribute('class')
  console.log('target:', targetEvent)
  playGame(getComputerChoice(), e.target.getAttribute('class'))
})

function getComputerChoice() {
  const resultArr = ['Rock', 'Paper', 'Scissors']
  return resultArr[getRandom(3)]
}

function getRandom(max) {
  return Math.floor(Math.random() * max)
}

function playerChoice(input) {
  if (typeof input !== 'string') {
    return 'Please enter a valid string'
  }

  if (input.toLowerCase() === 'rock' || input.toLowerCase() === 'paper' || input.toLowerCase() === 'scissors') {
    return input.charAt(0).toUpperCase() + input.toLowerCase().slice(1)

  }
  return 'Input must either be rock, paper or scissors'
}

let playerScore = 0
let computerScore = 0

function playGame(computerSelection, playerSelection) {
  console.log(computerSelection)
  console.log(playerSelection)
  if (playerSelection === computerSelection) {
    return console.log('Draw! Play again!')
  }
  if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || (playerSelection === 'Paper' && computerSelection === 'Rock') || (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
    playerScore++
    return console.log('Player wins!')
  }
  computerScore++
  return console.log('Computer Wins!')
}

const computerRoll = getComputerChoice()

function startRound() {
  playGame(getComputerChoice(), playerChoice())

  console.log('Player Score: ', playerScore)
  console.log('Computer Score: ', computerScore)
}

// playRound()
