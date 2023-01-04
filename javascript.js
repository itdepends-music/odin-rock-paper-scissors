function getComputerChoice () {
    // generate random integer between 1 and 3
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        return "Rock";
    } else if (randomNumber === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection) {
    // Change case to first letter uppercase and rest lowercase
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    const computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        return `Draw! Both players played ${playerSelection}`;
    }

    const didPlayerWin = (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    );

    if (didPlayerWin) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

// legacy function to run from command line
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock Paper Scissors: ");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);

        console.log(result);

        if (result.startsWith("You Win!")) {
            playerScore++;
        } else if (result.startsWith("You Lose!")) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("Congratulations! You Won!");
    } else if (playerScore < computerScore) {
        console.log("Too Bad! You Lost!");
    } else {
        console.log("Draw!!!!");
    }
}

function buttonHandler(event) {
    buttonId = this.id;
    const result = playRound(buttonId);
    roundResult.textContent = result;
    updateScore(result);
}

let winCount = 0;
let loseCount = 0;

function updateScore(result) {
    if (result.startsWith('You Win!')) {
        winCount++;
    } else if (result.startsWith('You Lose!')) {
        loseCount++;
    } else {
        winCount += 0.5;
        loseCount += 0.5;
    }

    winCountP.textContent = `Human: ${winCount}`;
    loseCountP.textContent = `Computer: ${loseCount}`;
    console.log(playCount, winCount, loseCount);

    if (winCount >= 5 || loseCount >= 5) { resetScore(); }
}

function resetScore() {
    if (winCount > loseCount) {
        console.log("Congratulations! You Won!");
    } else if (winCount < loseCount) {
        console.log("Too Bad! You Lost!");
    } else {
        console.log("Draw!!!!");
    }

    playCount = 0;
    winCount = 0;
    loseCount = 0;
}


const roundResult = document.querySelector('#roundResult');
const winCountP = document.querySelector('#winCount');
const loseCountP = document.querySelector('#loseCount')

const buttons = document.querySelectorAll('.buttons button');
buttons.forEach((button) => {
    button.addEventListener('click', buttonHandler);
});