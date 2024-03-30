// Rock, Paper, Scissors: Refactored with Functions
function initGame() {
  const startGame = confirm("Shall we play rock, paper, or scissors?");
  startGame ? playGame() : alert("Ok, maybe next time");
}

// Game flow function
function playGame() {
  while (true) {
    let playerChoice = getPlayerChoice();
    playerChoice = formatPlayerChoice(playerChoice);
    if (playerChoice === "") {
      invalidChoice();
      continue;
    }
    if (!playerChoice) {
      decidedNotToPlay();
      break;
    }
    playerChoice = evaluatePlayerChoice(playerChoice);
    if (!playerChoice) {
      invalidChoice();
      continue;
    }
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    displayResult(result);
    if (askToPlayAgain()) {
      continue;
    } 
    else {
      thanksForPlaying();
      break;  
    }
  }
}

function getPlayerChoice() {
  return prompt("Please enter rock, paper, or scissors.")
}

function formatPlayerChoice(playerChoice) {
  if (playerChoice || playerChoice === "") {
    return playerChoice.trim().toLowerCase();
  }
  else {
    return false;
  }
}


function decidedNotToPlay() {
  alert("I guess you changed your mind. Maybe next time.")
}

function evaluatePlayerChoice(playerChoice) {
  if (
    playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissors"
  ) {
    return playerChoice;
  }
  else {
    return false;
  }
}

function invalidChoice() {
  alert("You didn't enter rock, paper, or scissors.");
}

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3)
  const rpsArray = ["rock", "paper", "scissors"];
  return rpsArray[randomNumber];
}

function determineWinner(player, computer) {
  const winnder = player === computer ? "Tie game!"
    : playerOne === "rock" && computer === "paper" ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
    : playerOne === "paper" && computer === "scissors" ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
    :playerOne === "scissors" && computer === "rock" ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
    : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;

    return winnder;
}

function displayResult(result) {
  alert(result);
}

function askToPlayAgain() {
  return confirm("Play Again?");
}

function thanksForPlaying() {
  alert("Ok, thanks for playing.");
}

initGame();