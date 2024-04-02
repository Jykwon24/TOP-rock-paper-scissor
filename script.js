// Create function for computer choice
// The function will have 3 outcomes rock paper or scissor
// possibly randomize the output of the function btwn the 3 items

function getComputerChoice() {
  const resultArr = ['Rock', 'Paper', 'Scissor']
  return resultArr[getRandom(3)]
}

function getRandom(max) {
  return Math.floor(Math.random() * max)
}

console.log(getComputerChoice())
