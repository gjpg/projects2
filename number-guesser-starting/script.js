let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function compareGuesses(userGuess, computerGuess, target) {
  let userDistance = Math.abs(target - userGuess);
  let computerDistance = Math.abs(target - computerGuess);

  if (userDistance < computerDistance) {
    return false;
  } else {
    return true;
  }
}

function updateScore(winner) {
  if (winner === 'human') {
    humanScore++;
  } else {
    computerScore++;
  }
}

function advanceRound() {
  currentRoundNumber++;
}
