// Conditionals: If Statements
let playerOne = "rock";
let computer = "paper";
// Decision tree!
if (playerOne === computer) {
  //tie game!
}
else if (playerOne === "rock") {
  if (computer === "paper") {
    console.log("computer wins");
  }
  else {
    console.log("playerOne wins");
  }
}
else if (playerOne === "paper") {
  if (computer === "scissors") {
    console.log("computer wins");
  }
  else {
    console.log("playerOne wins");
  }
}
else {
  if (computer === "rock") {
    console.log("computer wins");
  }
  else {
    console.log("playerOne wins");
  }
}
