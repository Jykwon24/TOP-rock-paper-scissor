// Create function for computer choice
// The function will have 3 outcomes rock paper or scissor
// possibly randomize the output of the function btwn the 3 items
// Create logic what will take the player input
// Return that input, no matter the case user uses
//

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

  console.log(typeof input)
  if (input.toLowerCase() === 'rock' || input.toLowerCase() === 'paper' || input.toLowerCase() === 'scissors') {
    return input.charAt(0).toUpperCase() + input.toLowerCase().slice(1)

  }
  return 'Input must either be rock, paper or scissors'
}

const playerRoll = 'Rock'

function gameOn(computerSelection, playerSelection) {
  console.log(computerSelection)
  console.log(playerSelection)
  if (playerSelection === computerSelection) {
    return 'Draw! Play again!'
  }
  if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || (playerSelection === 'Paper' && computerSelection === 'Rock') || (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
    return 'Player 1 Wins!'
  }
  return 'Computer Wins!'
}

const computerRoll = getComputerChoice()

// console.log(getComputerChoice())
// console.log(playerChoice('rock'))
console.log(gameOn(getComputerChoice(), playerChoice('Rock')))
