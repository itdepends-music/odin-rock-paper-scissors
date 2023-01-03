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

function playRound(playerSelection, computerSelection) {
    // Change case to first letter uppercase and rest lowercase
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase();

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

const rock_btn = document.querySelector('#rock');
const paper_btn = document.querySelector('#paper');
const scissors_btn = document.querySelector('#scissors');

rock_btn.addEventListener('click', () => {
    const result = playRound('rock', getComputerChoice());
    console.log(result);
})

paper_btn.addEventListener('click', () => {
    const result = playRound('paper', getComputerChoice());
    console.log(result);
})

scissors_btn.addEventListener('click', () => {
    const result = playRound('scissors', getComputerChoice());
    console.log(result);
})