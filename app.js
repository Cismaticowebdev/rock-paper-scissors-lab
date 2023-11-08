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
    } else if(userChoice === "rock" && computerChoice === "paper") {
        roundMsg = "You lose!"
        updateRoundMessage(roundMsg);
    } else if(userChoice === "rock" && computerChoice === "scissors") {
        roundMsg = "You win!"
        updateRoundMessage(roundMsg);
    } else if(userChoice === "paper" && computerChoice === "rock") {
        roundMsg = "You win!"
        updateRoundMessage(roundMsg);
    } else if(userChoice === "paper" && computerChoice === "scissors") {
        roundMsg = "You lose!"
        updateRoundMessage(roundMsg);
    } else if(userChoice === "scissors" && computerChoice === "rock") {
        roundMsg = "You lose!"
        updateRoundMessage(roundMsg);
    } else if(userChoice === "scissors" && computerChoice === "paper") {
        roundMsg = "You win!"
        updateRoundMessage(roundMsg);
    }
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