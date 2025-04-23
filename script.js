let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg-container");
const userScorePara = document.querySelector("#userscore");
const compScorePara = document.querySelector("#compscore");

// Event listener for each choice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const genchoice = () => {
  const ops = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * 3);
  return ops[index];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31"; // Dark blue for draw
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userscore++;
    userScorePara.innerText = userscore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green"; // Green for win
  } else {
    compscore++;
    compScorePara.innerText = compscore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red"; // Red for loss
  }
};

const playGame = (userChoice) => {
  // Generate computer's choice
  const compChoice = genchoice();

  if (userChoice === compChoice) {
    // It's a draw
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // Scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // Rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // Rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};
