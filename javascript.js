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
        return 1;
    } else if (playerScore < computerScore) {
        return -1;
    } else {
        return 0;
    }
}

function buttonHandler(event) {
    const buttonId = this.id;
    const result = playRound(buttonId);
    if (result === 1) {
        roundResult.textContent = "Congratulations! You Won!";
    } else if (result === 0) {
        roundResult.textContent = "Draw!!!!";
    } else if (result === -1) {
        roundResult.textContent = "Too Bad! You Lost!";
    }
}


const roundResult = document.querySelector('#roundResult');

const buttons = document.querySelectorAll('.buttons button');
buttons.forEach((button) => {
    button.addEventListener('click', buttonHandler);
});