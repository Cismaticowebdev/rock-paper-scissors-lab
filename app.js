const maxScore = 3;
let userScore = 0;
let computerScore = 0;

const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", resetGame);

const btnRock = document.getElementById("rock");
btnRock.addEventListener("click", playRound);

const btnPaper = document.getElementById("paper");
btnPaper.addEventListener("click", playRound);

const btnScissors = document.getElementById("scissors");
btnScissors.addEventListener("click", playRound);

function playRound() {
    let userChoice = this.textContent.toLowerCase();
    let computerChoice = getComputerChoice();
    let roundMsg;

    updateChoicesMessage(userChoice, computerChoice);

    if (userChoice === computerChoice) {
        roundMsg = "It's a draw!"
        updateRoundMessage(roundMsg);
    } else if (userChoice === "rock" && computerChoice === "paper") {
        roundMsg = "You lose!"
        computerScore++;
        updateRoundMessage(roundMsg);
        updateScore();
    } else if (userChoice === "rock" && computerChoice === "scissors") {
        roundMsg = "You win!"
        userScore++;
        updateRoundMessage(roundMsg);
        updateScore();
    } else if (userChoice === "paper" && computerChoice === "rock") {
        roundMsg = "You win!"
        userScore++;
        updateRoundMessage(roundMsg);
        updateScore();
    } else if (userChoice === "paper" && computerChoice === "scissors") {
        roundMsg = "You lose!"
        computerScore++;
        updateRoundMessage(roundMsg);
        updateScore();
    } else if (userChoice === "scissors" && computerChoice === "rock") {
        roundMsg = "You lose!"
        computerScore++;
        updateRoundMessage(roundMsg);
        updateScore();
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        roundMsg = "You win!"
        userScore++;
        updateRoundMessage(roundMsg);
        updateScore();
    }

    checkWinner();
}

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    return computerChoice;
}

function updateRoundMessage(msg) {
    const roundMsg = document.getElementById("round-msg");
    roundMsg.textContent = msg;
}

function updateChoicesMessage(userText, computerText) {
    const userMsg = document.getElementById("user-msg");
    userMsg.textContent = "User: " + userText;

    const computerMsg = document.getElementById("computer-msg");
    computerMsg.textContent = "Computer: " + computerText;
}

function updateScore() {
    const userScoreMsg = document.getElementById("userScore");
    const computerScoreMsg = document.getElementById("computerScore");

    userScoreMsg.textContent = "User score: " + userScore;
    computerScoreMsg.textContent = "Computer score: " + computerScore;

}

function checkWinner() {
    let win = false;

    if (userScore === maxScore) {
        win = true;
        updateWinner(win);
        disableBtns();
        activateResetBtn();
    } else if (computerScore === maxScore) {
        updateWinner(win);
        disableBtns();
        activateResetBtn();
    }
}

function updateWinner(win) {
    const container = document.getElementById("msg-container");
    const str = document.createElement("p");
    str.setAttribute("id", "winnerMsg");

    if (win) {
        str.textContent = "You won the game!"
    } else {
        str.textContent = "You lost the game!"
    }

    container.appendChild(str);
}

function disableBtns() {
    btnRock.setAttribute("disabled", "disabled");
    btnPaper.setAttribute("disabled", "disabled");
    btnScissors.setAttribute("disabled", "disabled");
}

function activateResetBtn() {
    resetBtn.removeAttribute("hidden");
}

function activateBtns() {
    btnRock.removeAttribute("disabled");
    btnPaper.removeAttribute("disabled");
    btnScissors.removeAttribute("disabled");
}

function resetGame() {
    document.getElementById("winnerMsg").remove();
    document.getElementById("round-msg").textContent = "Click a button!";
    document.getElementById("user-msg").textContent = "User: ";
    document.getElementById("computer-msg").textContent = "Computer: ";

    userScore = 0;
    computerScore = 0;

    updateScore();
    activateBtns();

    resetBtn.setAttribute("hidden", "hidden");
}