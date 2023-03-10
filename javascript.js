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

function buttonHandler(event) {
    const buttonId = this.id;
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
    totalResults.textContent = '';  

    if (winCount >= 5 || loseCount >= 5) { resetScore(); }
}

function resetScore() {
    totalResults.classList.remove('hidden');
    if (winCount > loseCount) {
        totalResults.textContent = "Congratulations! You Won!";
    } else if (winCount < loseCount) {
        totalResults.textContent = "Too Bad! You Lost!"
    } else {
        totalResults.textContent = "Draw!!!!";
    }

    winCountP.textContent = `Human: ${winCount}`;
    loseCountP.textContent= `Computer: ${loseCount}`;

    resetButton.classList.remove('hidden');
    buttons.forEach((button) => {
        button.classList.add('hidden');
    });
}

function resetButtonHandler() {
    winCountP.textContent = '';
    loseCountP.textContent = '';
    roundResult.textContent = '';
    totalResults.textContent = '';
    winCount = 0;
    loseCount = 0;

    resetButton.classList.add('hidden');
    totalResults.classList.add('hidden');
    buttons.forEach((button ) => {
        button.classList.remove('hidden');
    });
}

const totalResults = document.querySelector('#totalResults');
const roundResult = document.querySelector('#roundResult');
const winCountP = document.querySelector('#winCount');
const loseCountP = document.querySelector('#loseCount')
const resetButton = document.querySelector('#reset');

const buttons = document.querySelectorAll('.buttons button');
buttons.forEach((button) => {
    button.addEventListener('click', buttonHandler);
});

resetButton.addEventListener('click', resetButtonHandler);