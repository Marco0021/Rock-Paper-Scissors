let userScore = 0;
let computerScore = 0;

let score = document.querySelector("#score");
let result = document.querySelector("#result");
let finalResult = document.querySelector("#finalResult");

score.innerHTML = `Player Score = ${userScore} &nbsp&nbsp&nbsp&nbsp&nbsp Computer Score = ${computerScore}`;

function computerSelection() {
  comp = Math.floor(Math.random() * 3);
  if (comp === 0) {
    return "rock";
  } else if (comp === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(userChoice) {
  console.log(userChoice, computerSelection());

  let compChoice = computerSelection();

  if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "scissors" && compChoice === "paper") ||
    (userChoice === "paper" && compChoice === "rock")
  ) {
    userScore++;
    result.innerHTML = `${userChoice} vs ${compChoice}`;
    score.innerHTML = `PLAYER SCORE = ${userScore} &nbsp&nbsp&nbsp&nbsp&nbsp  Computer Score = ${computerScore}`;
    return "You Win";
  } else if (userChoice === compChoice) {
    result.innerHTML = `${userChoice} vs ${compChoice}`;
    score.innerHTML = `Player Score = ${userScore} &nbsp&nbsp&nbsp&nbsp&nbsp  Computer Score = ${computerScore}`;
    return "It's a Tie";
  } else {
    computerScore++;
    result.innerHTML = `${userChoice} vs ${compChoice}`;
    score.innerHTML = `Player Score = ${userScore} &nbsp&nbsp&nbsp&nbsp&nbsp  COMPUTER SCORE = ${computerScore}`;
    return "you Lose";
  }
}

function game() {
  if (userScore === 5) {
    userScore = 0;
    finalResult.textContent = "You are the Winner!";
    computerScore = 0;
    userScore = 0;
  } else if (computerScore === 5) {
    finalResult.innerHTML = "You Lost! Try again.";
    userScore = 0;
    computerScore = 0;
  } else {
    return (finalResult.innerHTML = "");
  }
}

let btnRock = document.querySelector("#btnRock");

btnRock.addEventListener("click", () => {
  playRound("rock");
});

btnRock.addEventListener("click", () => {
  game();
});

let btnPaper = document.querySelector("#btnPaper");

btnPaper.addEventListener("click", () => {
  playRound("paper");
});

btnPaper.addEventListener("click", () => {
  game();
});

let btnScissors = document.querySelector("#btnScissors");

btnScissors.addEventListener("click", () => {
  playRound("scissors");
});

btnScissors.addEventListener("click", () => {
  game();
});
